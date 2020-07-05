import React, { Component } from 'react';
// import './App.css';
import NavBar from './navbar/Toolbar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/footer';
import SideDrawer from './navbar/SideDrawer/sideDrawer';



class App extends Component {
  state = { isLogged: false ,}

  logged = (boolean) => {
    this.setState({ isLogged: boolean })
  }


  render() {

    return (
      <BrowserRouter>
        <div className="App" style={{height:'100%'}}>

          <NavBar log={this.logged} />
          <SideDrawer/>
          <main style={{marginTop:'64px'}}></main>
          <Footer />

        </div>
      </BrowserRouter>
    )
  }
}

export default App;

