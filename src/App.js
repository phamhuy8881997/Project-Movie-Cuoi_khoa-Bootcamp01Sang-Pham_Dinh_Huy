import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainRoute, AdminRoute } from "./router/router";
import TemplateMain from "./core/main/template_main";
//import TemplateAdmin from "./core/admin/templateAdmin";
import { Redirect } from "react-router-dom";
import GuardAdmin from "./core/admin/components/guard/guard";

class App extends Component {
  showMainRouter = () => {
    let resule = "";
    resule = MainRoute.map((route, i) => {
      return (
        <Route key={i} path={route.path} exact={route.exact}>
          <TemplateMain Component={route.main}></TemplateMain>
        </Route>
      );
    });
    return resule;
  };
  showAdminRouter = () => {
    let resule = "";
    resule = AdminRoute.map((route, i) => {
      return (
        <Route key={i} path={route.path} exact={route.exact}>
          <GuardAdmin Component={route.main}></GuardAdmin>
        </Route>
      );
    });
    return resule;
  };
  render() {
    return (
      <div className="App" id="My__App">
        <Router>
          <Switch>
            {this.showMainRouter()}
            {this.showAdminRouter()}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
//bg_dark
