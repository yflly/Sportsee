//import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "../../pages/Dashboard";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/:id" component={Dashboard} />
          <Route patch="*" component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
