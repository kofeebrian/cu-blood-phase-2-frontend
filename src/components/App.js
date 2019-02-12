import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavbarDesktop from "./Navbar/NavbarDesktop";
import NavbarMobile from "./Navbar/NavbarMobile";

import Home from "./Home/Home";
import QRReaderpage from "./QRReader/QRReaderpage";
import Signup from "./Login/Signup";
import Info from "./Login/Info";
import LoginForm from "./Login/LoginForm";

import { Responsive } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="">
        <BrowserRouter>
          <div>
            <Responsive as={NavbarMobile} {...Responsive.onlyMobile} />
            <Responsive
              as={NavbarDesktop}
              minWidth={Responsive.onlyTablet.minWidth}
            />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/signup" exact component={Info} />
            <Route path="/signupform" exact component={Signup} />
            <Route path="/" exact component={Home} />
            <Route path="/qr" exact component={QRReaderpage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
