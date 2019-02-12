import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import QRReaderpage from "./QRReader/QRReaderpage";
import Signup from "./Login/Signup";
import Info from "./Login/Info";
import LoginForm from "./Login/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Navbar />
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
