import React, { Component } from 'react';
import '../App.css';
import '../home/Home.css';
import { BrowserRouter, Link, Switch, Route, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from '../home/Home';
import Home1 from '../home/Home1';
import SettingQueues from '../settingQueue/SettingQueues';
import PriceList from '../priceList/PriceList';
import Products from '../product/Products';
import Admin from '../admin/BusinessManager/Admin';
import ClientQueues from '../admin/BusinessManager/clientQueues';
import ClientQueuesToEmployee from '../admin/Employee/ClientQueuesToEmployee';
import Gallery from '../gallery/Gallery';
import Login from '../login/Login';
import SignIn from '../login/SignIn';
import SignUp from '../login/SignUp';
import SignUpAdmin from '../login/signUpAdmin';
import AboutUs from '../home/AboutUs';
import TermsOfUse from '../home/TermsOfUse';
import WebManager from '../admin/BusinessManager/WebManager';
import UpdateActivityTime from '../admin/BusinessManager/UpdateActivityTime';
import SettingQAdmin from '../admin/BusinessManager/SettingQAdmin';
import UpdatePriceList from '../admin/BusinessManager/UpdatePriceList';
import ReactUploadImage from '../admin/BusinessManager/UploadImages';
import Employee from '../admin/Employee/Employee';
import WebEmployee from '../admin/Employee/WebEmployee';
import S from '../settingQueue/s';
import TotalSubscribers from '../admin/BusinessManager/TotalSubscribers'
import Footer from '../footer/footer'
import NotFound from '../notFound/NotFound';


class NavBar extends Component {
    state = { sideDrawerOpen: false, firstName: { firstName: null, phoneNumber: null }, dateHistory: { date: '', time: '' }, name: { userName: '', phone: '' } }
    name = ''
    username = (name) => {
        let tmp = [this.state.firstName]
        let tempUser = { name: name.firstName, lastname: name.lastName }
        console.log(tmp);

        tmp.push(tempUser)
        this.setState({ firstName: tmp })
    }

    logs = (userName, phone, token) => {
        // console.log(userName, phone, token);
        let temp = { userName, phone, token }
        // console.log(temp);

        this.setState({ name: temp })
        // console.log(this.state.name);

    }
    componentDidMount() {
        this.logs();
    }

    logOUt() {
        localStorage.removeItem('usertoken')
        localStorage.removeItem('admintoken')
        localStorage.removeItem('employeetoken')
        this.props.history.push('/')
    }


    loginRegLink = (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">
            <Link to='/'>  <img src='/logo.png' alt='logo' id='logoNaftali' /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className='nav-link'>בית</Link>
                    <Link to='/Gallery' className='nav-link'>גלריה</Link>
                    <Link to='/PriceList' className='nav-link'>מחירון</Link>
                    <Link to='/Products' className='nav-link'>המוצרים שלנו</Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <Nav.Link href="#featureggs">ttttt</Nav.Link>
                        <Nav.Link href="#pricifdgng">Prittttcing</Nav.Link>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">שלום ,אורח!</Nav.Link>
                    <NavDropdown title="התחברות" id="collasible-nav-dropdown">
                        <Link to="/SignIn" className='registered'>לקוח קיים</Link>

                        <NavDropdown.Divider />
                        <Link to="/SignUp" className='registered'>הרשמה</Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
    userLink = (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >
              <Link to='/Home1'>  <img src='/logo.png' alt='logo' id='logoNaftali' /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/Home1' className='nav-link'>בית</Link>
                    <Link to='/Gallery' className='nav-link'>גלריה</Link>
                    <Link to='/SettingQueues' className='nav-link'>קביעת תורים</Link>
                    <Link to='/PriceList' className='nav-link'>מחירון</Link>
                    <Link to='/Products' className='nav-link'>המוצרים שלנו</Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <Nav.Link href="#featureggs">ttttt</Nav.Link>
                        <Nav.Link href="#pricifdgng">Prittttcing</Nav.Link>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">שלום , {this.state.name.userName} !</Nav.Link>
                    <Link to='' onClick={this.logOUt.bind(this)} className='nav-link'>יציאה</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
    adminLink = (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">
               <Link to='/WebManager'><img src='/logo.png' alt='logo' id='logoNaftali' /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/WebManager" className='nav-link'>בית</Link>
                    <Link to='/Gallery' className='nav-link'>גלריה</Link>
                    <Link to='/PriceList' className='nav-link'>מחירון</Link>
                    <Link to='/Products' className='nav-link'>המוצרים שלנו</Link>
                    <NavDropdown title="תורים" id="collasible-nav-dropdown">
                        <NavDropdown.Item to='/' className='nav-link-admin'><Link to='/SettingQAdmin'>קביעת תורים</Link></NavDropdown.Item>
                        {/* <Link to='/ClientQueues' className='nav-link-admin'>תורים שנקבעו</Link> */}
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/ClientQueues">תורים שנקבעו</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link to='' onClick={this.logOUt.bind(this)} className='nav-link'>יציאה</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

    employeeLink = (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">
               <Link to='WebManager'> <img src='/logo.png' alt='logo' id='logoNaftali' /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Link to='/WebManager'>בית</Link>
                     <Link to='/Gallery'>גלריה</Link>
                     <Link to='/SettingQAdmin'>קביעת תורים</Link>
                     <Link to='/PriceList'>מחירון</Link>
                     <Link to='/Products'>המוצרים שלנו</Link>
                     <Link to='/ClientQueuesToEmployee'>תורים שנקבעו</Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <Nav.Link href="#featureggs">ttttt</Nav.Link>
                        <Nav.Link href="#pricifdgng">Prittttcing</Nav.Link>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link to='' onClick={this.logOUt.bind(this)} className='nav-link'>יציאה</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

    render() {
        console.log('render');

        return (
            <BrowserRouter>
                {this.user()}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Home1' component={Home1} />
                    <Route exact path='/Gallery' component={Gallery} />
                    <Route exact path='/SettingQueues' render={() => <SettingQueues logs={this.logs} username={this.state.name} phone={this.state.phoneNumber} select={this.date} />} />
                    <Route exact path='/PriceList' component={PriceList} />
                    <Route exact path='/Products' component={Products} />
                    <Route exact path='/SignIn' render={() => <SignIn userName={this.username} logs={this.logs} log={this.props.log} />} />
                    <Route exact path='/SignUp' component={SignUp} />
                    <Route exact path='/Admin' render={() => <Admin userName={this.username} logs={this.logs} />} />
                    <Route exact path='/signUpAdmin' component={SignUpAdmin} />
                    <Route exact path='/ClientQueues' render={() => <ClientQueues username={this.state.firstName} dateHistory={this.state.dateHistory} />} />
                    <Route exact path='/ClientQueuesToEmployee' render={() => <ClientQueuesToEmployee username={this.state.firstName} dateHistory={this.state.dateHistory} logs={this.logs} log={this.props.log} />} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/AboutUs' component={AboutUs} />
                    <Route exact path='/TermsOfUse' component={TermsOfUse} />
                    <Route exact path='/WebManager' component={WebManager} />
                    <Route exact path='/WebEmployee' component={WebEmployee} />
                    <Route exact path='/UpdateActivityTime' render={() => <UpdateActivityTime />} />
                    <Route exact path='/SettingQAdmin' render={() => <SettingQAdmin username={this.state.firstName} select={this.date} />} />
                    <Route exact path='/UpdatePriceList' component={UpdatePriceList} />
                    <Route exact path='/UploadImages' component={ReactUploadImage} />
                    <Route exact path='/Employee' render={() => <Employee userName={this.username} logs={this.logs} log={this.props.log} />} />
                    <Route exact path='/S' component={S} />
                    <Route exact path='/TotalSubscribers' component={TotalSubscribers} />
 
                    <Route exact path='/Footer' component={Footer} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )

    }

    checkAuth = () => {

    }

    user = () => {
        if (localStorage.usertoken) {
            return this.userLink
        }
        else if (localStorage.admintoken) {
            return this.adminLink
        }
        else if (localStorage.employeetoken) {
            return this.employeeLink
        }
        else {
            return this.loginRegLink
        }
    }


}

export default withRouter(NavBar)