import React, { Component } from 'react';
import { Redirect ,Link} from 'react-router-dom';
import './WebManager.css';
import NewUpdates from './NewUpdates';
import { ButtonToolbar, Nav, NavDropdown } from 'react-bootstrap';


class WebManager extends Component {

    state = { newUpdatesShow: false, acTime: false, setclientqueues: false, updatePriceList: false, updateGallery: false }
    render() {
        let newUpdatesClose = () => this.setState({ newUpdatesShow: false })
        if (this.state.updateGallery) {
            return <Redirect to='/UploadImages' />
        }
        if (this.state.setclientqueues) {
            return <Redirect to='/SettingQAdmin' />
        }
        if (this.state.updatePriceList) {
            return <Redirect to='UpdatePriceList' />
        }
        return (
            <div className='container1'>
 
                    <Nav>
                        <NavDropdown title="דוחות" id="collasible-nav-dropdown">
                           <Nav.Link ><Link to='/ClientQueues'>רשימת תורים</Link></Nav.Link>
                           <Nav.Link > <Link to='/SettingQAdmin'>סיכום כמויות</Link></Nav.Link>
                           <Nav.Link > <Link to='/UpdatePriceList'>סיכום הרשמות</Link></Nav.Link>
                           <Nav.Link > <Link to='/UpdatePriceList'>סיכום תורים</Link></Nav.Link>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown title="עדכונים" id="collasible-nav-dropdown">
                        <Nav.Link > <Link to='/UploadImages'>עדכון גלריה</Link></Nav.Link>
                           <Nav.Link > <Link to='/SettingQAdmin'>קביעת תורים</Link></Nav.Link>
                           <Nav.Link > <Link to='/UpdatePriceList'>עדכון מחירים</Link></Nav.Link>
                           <ButtonToolbar>
                        <div className="righter">
                            <button className="righter" onClick={() => {
                                this.setState({ newUpdatesShow: true })
                            }}>עדכונים חמים</button>
                            <NewUpdates
                                show={this.state.newUpdatesShow}
                                onHide={newUpdatesClose}
                            />
                        </div>
                    </ButtonToolbar>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown title="יומן" id="collasible-nav-dropdown">
                        <Nav.Link > <Link to='/UploadImages'>קביעת תורים</Link></Nav.Link>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown title="הכנסות / הוצאות" id="collasible-nav-dropdown">
                        <Nav.Link > <Link to='/UploadImages'>חישוב הכנסות והוצאות</Link></Nav.Link>
                           <Nav.Link > <Link to='/SettingQAdmin'>היסטוריה</Link></Nav.Link>
                        </NavDropdown>
                    </Nav>


     


            </div>
        )
    }
}
export default WebManager;