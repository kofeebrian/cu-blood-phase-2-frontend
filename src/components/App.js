import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HeaderReact from "./Header/Header";
import Home from "./Home/Home";
import QRReader from "./QRReader/QRReader";
import Signup from "./Login/Signup";
import Info from "./Login/Info";
import LoginForm from "./Login/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="">
        <BrowserRouter>
          <div>
            <HeaderReact />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/signup" exact component={Info} />
            <Route path="/signupform" exact component={Signup} />
            <Route path="/" exact component={Home} />
            <Route path="/qr" exact component={QRReader} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
