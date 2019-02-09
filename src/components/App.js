import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header/Header";
import HeaderReact from "./Header/HeaderReact";
import Home from "./Home/Home";
import QRReader from "./QRReader/QRReader";
import Signup from "./Signup";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <HeaderReact />
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/qr" exact component={QRReader} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
