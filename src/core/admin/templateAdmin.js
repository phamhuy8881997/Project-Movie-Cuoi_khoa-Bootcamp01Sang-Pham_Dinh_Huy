import React, { Component } from "react";
import AdminHeader from "./components/adminHeader/adminHeader";
import "./templateAdmin.scss";

class TemplateAdmin extends Component {
  render() {
    let { Component } = this.props;
    return (
      <div className="admin__pageTemplate">
        <div className="admin__pageTemplate1">
          <AdminHeader />
        </div>
        <div className="admin__pageTemplate2">
          <Component />
        </div>
      </div>
    );
  }
}

export default TemplateAdmin;
