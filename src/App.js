import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Contacts from './Contacts.js';


class App extends Component {



  componentDidMount() {
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos > screen.availHeight) {
        document.getElementById("menu-bar").style.position = "relative";
        document.getElementById("menu-bar").style.top = "0";
      }
    };
  }


  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light sticky-top transparent" >
          <a className="navbar-brand" href="#">APMCA.</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>


        {(window.location.pathname === '/home') && <Home />}
        {(window.location.pathname === '/contacts') && <Contacts />}


        

        <footer className="footer">
          <div className="top-footer">
            <div className="brand-footer">
              <p><a className="navbar-brand" href="#">APMCA.</a></p>
              <a className="email" href="#">sample@sample.com</a>
              <p>1234-567-890</p>
            </div>
            <div className="menu-footer">
              <h2>Menu</h2>
              <div className="links-footer">
                <p><a href="#">Home</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Contact Us</a></p>
              </div>
            </div>
            <div className="location-footer">
              <h2>Location</h2>
              <p>
                Municipal Commissioner's Association,
                Maarvel pride,B Block,
                Flat No-101,
                5/8 Annapurna Nagar,
                Gorantla-522034,
                Guntur,Andhra Pradesh.
              </p>
            </div>
          </div>
          <div className="copyright">
            Copyright © 2018
          </div>
        </footer>

      </div>
    );
  }
}

export default App;