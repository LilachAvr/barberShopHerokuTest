import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/footer';
// import SideDrawer from './navbar/SideDrawer/SideDrawer';
// import Backdrop from './navbar/Backdrop/Backdrop'


class App extends Component {
  state = { isLogged: false ,sideDrawerOpen:false}

  logged = (boolean) => {
    this.setState({ isLogged: boolean })
  }


  render() {

      return (
      <BrowserRouter>
        <div className="App" style={{height:'100%'}}>

          <NavBar log={this.logged} />
          {/* {sideDrawer}
          {backdrop}
          <main style={{marginTop:'64px'}}></main> */}
          <Footer />

        </div>
      </BrowserRouter>
    )
  }
}

export default App;

