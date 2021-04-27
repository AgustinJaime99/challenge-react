import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home/";
import Navbar from "../components/Navbar";

const Routes = () => {
  return (
    <React.Fragment>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />
    </React.Fragment>
  );
};

export default Routes;
