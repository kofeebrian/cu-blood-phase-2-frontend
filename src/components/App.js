import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import history from "../history";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import QRReaderpage from "./QRReader/QRReaderpage";
import SignupForm from "./Login/SignupForm";
import Info from "./Login/Info";
import LoginForm from "./Login/LoginForm";
import ManageStaff from "./ManageStaff/ManageStaff";
import Edit from "./Edit/Edit";
import PwEdit from "./Edit/pwEdit";

import ScrollToTop from "./ScrollToTop";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

import { getRememberUserData } from "../actions";

class App extends Component {
  componentWillMount = async () => {
    const accessToken =
      sessionStorage.getItem("accessToken") ||
      localStorage.getItem("accessToken") ||
      null;
    const userId =
      sessionStorage.getItem("userId") ||
      localStorage.getItem("userId") ||
      null;
    if (accessToken && userId) {
      await this.props.getRememberUserData(userId, accessToken);
    }
  };

  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Navbar />
            <ScrollToTop>
              <Switch>
                <Route path="/login" exact component={LoginForm} />
                <Route path="/signup" exact component={Info} />
                <Route path="/signupform" exact component={SignupForm} />
                <PrivateRoute path="/" exact component={Home} />
                <PrivateRoute path="/edit/:id" exact component={Edit} />
                <PrivateRoute path="/pwedit/:id" exact component={PwEdit} />
                <PrivateRoute path="/qr" exact component={QRReaderpage} />
                <AdminRoute
                  path="/manage-staff"
                  exact
                  component={ManageStaff}
                />
                <Redirect to="/" />
              </Switch>
            </ScrollToTop>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  { getRememberUserData }
)(App);
