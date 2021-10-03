import React, { Component } from "react";
import "./menu.scss";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
const avatar = require(`../../../../access/images/image/avatar.png`).default;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { taiKhoan: "NoLogin" },
    };
  }
  componentDidMount() {
    if (localStorage.getItem("userLogin")) {
      let user = JSON.parse(localStorage.getItem("userLogin"));
      this.setState({ user: user });
    }
  }
  handleLogOut = () => {
    localStorage.setItem("userLogin", JSON.stringify({ taiKhoan: "NoLogin" }));
    this.props.history.push("/");
    setTimeout(() => window.location.reload(), 1000);
  };
  darkMode = () => {
    document.getElementById("My__App").classList.toggle("bg___dark");
  };
  render() {
    let { user } = this.state;
    //console.log("test:", user.taiKhoan);
    return (
      <section className="menu__page text-center">
        <input type="checkbox" id="check__menu" />
        <div className="menu__page--content">
          <label htmlFor="check__menu">
            <i className="fa fa-align-right"></i>
          </label>
          <div className="menu__page--body">
            <label htmlFor="check__menu">
              <i className="fa fa-times-circle"></i>
            </label>
            {user.taiKhoan === "NoLogin" ? (
              <div className="menu__page--text">
                <div>
                  <i className="fa fa-user-circle"></i>
                </div>
                <h6 className="mb-4">Chưa Đăng Nhập</h6>
                <Link
                  type="button"
                  className="btn btn-info btn__setting"
                  to="/login"
                >
                  <i className="fa fa-user-check"></i>
                  <span>Đăng Nhập</span>
                </Link>
                <Link
                  type="button"
                  className="btn btn-danger btn__setting"
                  to="/"
                >
                  <i className="fa fa-home"></i>
                  <span>Trang Chủ</span>
                </Link>
                {/* <div className="admin__to--page">
                  <Link
                    type="button"
                    className="btn btn-warning btn__setting"
                    to="/admin"
                  >
                    <i class="fa fa-user-secret"></i>
                    <span>Quản Trị</span>
                  </Link>
                </div> */}
                <div
                  id="switch-dark-mode"
                  onClick={() => {
                    this.darkMode();
                  }}
                >
                  <div className="switch-ovelay">
                    <div className="switch--sun">🌤</div>
                    <div className="switch--moon">🌙</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="menu__page--text">
                <div>
                  <img src={avatar} alt="..." width="50px" />
                </div>
                <h6>{user.hoTen}</h6>
                <div>
                  <a href="/profile" className="btn btn-success btn__setting">
                    <i className="fa fa-address-card"></i>
                    <span>Thông Tin</span>
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-danger btn__setting"
                  onClick={() => {
                    this.handleLogOut();
                  }}
                >
                  <i className="fa fa-user-times"></i>
                  <span>Đăng Xuất</span>
                </button>
                <Link
                  type="button"
                  className="btn btn-info btn__setting"
                  to="/"
                >
                  <i className="fa fa-home"></i>
                  <span>Trang Chủ</span>
                </Link>
                <div className="admin__to--page">
                  <Link
                    type="button"
                    className="btn btn-warning btn__setting"
                    to="/admin"
                  >
                    <i className="fa fa-user-secret"></i>
                    <span>Quản Trị</span>
                  </Link>
                </div>
                <div
                  id="switch-dark-mode"
                  onClick={() => {
                    this.darkMode();
                  }}
                >
                  <div className="switch-ovelay">
                    <div className="switch--sun">🌤</div>
                    <div className="switch--moon">🌙</div>
                    {/* <img
                      src={
                        require(`../../../../access/images/image/swSun.jpg`)
                          .default
                      }
                      alt="..."
                      className="switch--sun"
                    />
                    <img
                      src={
                        require(`../../../../access/images/image/swMoon1.png`)
                          .default
                      }
                      alt="..."
                      className="switch--moon"
                    /> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Menu);
