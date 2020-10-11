import React, { Component, lazy, Suspense } from 'react';
import './App.css';


// import NavBar from './navbar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './footer/footer';
const NavBar = React.lazy(() => import('./navbar/NavBar'))
const Footer = React.lazy(() => import('./footer/footer'))

// import SelectManagerType from './login/SelectManagerType';
// import SideDrawer from './navbar/SideDrawer/SideDrawer';
// import Backdrop from './navbar/Backdrop/Backdrop'

class App extends Component {
  state = { isLogged: false, sideDrawerOpen: false, ManagerTypeShow: false }

  logged = (boolean) => {
    this.setState({ isLogged: boolean })
  }

  // componentDidUpdate(){
  //   this.setState({ ManagerTypeShow: true })
  // }
  render() {
    // let ManagerTypeClose = () => this.setState({ ManagerTypeShow: false })
    return (
      <BrowserRouter>
        <div className="App" style={{ height: '100%' }}>
          <Suspense fallback={<div>Loading...</div>}>

            <NavBar log={this.logged} />
            <Footer />
          </Suspense>
          {/* <SelectManagerType
         show={this.state.ManagerTypeShow}
         onHide={ManagerTypeClose}
         /> */}

          {/* {sideDrawer}
          {backdrop}
          <main style={{marginTop:'64px'}}></main> */}
          

        </div>
      </BrowserRouter>
    )
  }
}

export default App;

