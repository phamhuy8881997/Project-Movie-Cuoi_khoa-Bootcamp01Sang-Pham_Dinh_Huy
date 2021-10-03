import React from "react";
import { Redirect } from "react-router-dom";
import TemplateAdmin from "../../templateAdmin";

function GuardAdmin(props) {
  const { Component } = props;
  let user = {};
  if (localStorage.getItem("userLogin")) {
    user = JSON.parse(localStorage.getItem("userLogin"));
  }
  if (user.maLoaiNguoiDung === "QuanTri") {
    return <TemplateAdmin Component={Component}></TemplateAdmin>;
  } else {
    return <Redirect to="/" />;
  }
}

export default GuardAdmin;
