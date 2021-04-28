import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home/";
import Navbar from "../components/Navbar";
import Login from "../components/Login/index";

const Routes = () => {
  return (
    <React.Fragment>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  );
};

export default Routes;
