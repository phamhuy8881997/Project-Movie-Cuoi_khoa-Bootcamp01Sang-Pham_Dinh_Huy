import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Modal from "../../components/modal/modal";
import "./header.scss";
import { withRouter } from "react-router";
import { toast } from "react-toastify";

class Header extends Component {
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
  handleLogOutUser = () => {
    localStorage.setItem("userLogin", JSON.stringify({ taiKhoan: "NoLogin" }));
    setTimeout(() => {
      window.location.reload();
    }, 2100);
    toast.error(`⚠️ đăng suất sau 2s ! `, {
      position: "top-center",
      autoClose: 2000,
      pauseOnHover: false,
    });
  };
  handleScroll = (value) => {
    this.props.history.push("/");
    setTimeout(() => {
      let pos = document.getElementById(value).offsetTop;
      window.scrollTo(0, pos - 100);
    }, 750);
  };
  render() {
    //console.log("user", this.state.user);
    return (
      <div>
        <div className="header">
          <div className="header__logo">
            <a href="/">
              <i className="fa fa-star i__header"></i>
              {/* <p>Star Movie</p> */}
            </a>
            <div className="name__movie"></div>
          </div>

          <div className="header__content">
            {this.state.user.taiKhoan === "NoLogin" ? (
              <Link className="login__icon" to="/login">
                <i className="fa fa-user-circle mr-2"></i>
                <span>Đăng Nhập</span>
              </Link>
            ) : (
              <div
                className="login__icon"
                onClick={() => {
                  this.handleLogOutUser();
                }}
              >
                <i className="fa fa-user-times mr-2"></i>
                <span>Đăng Xuất</span>
              </div>
            )}
          </div>

          <div className="header__menu" id="header__menu">
            <div className="header__menu--content">
              <div className="header__menu--1">
                <div id="trapezium1"></div>
                <p
                  onClick={() => {
                    this.handleScroll("lichchieu");
                  }}
                >
                  <span>Lịch Chiếu</span>
                </p>
                <div id="trapezium2"></div>
              </div>
              <div className="header__menu--1">
                <div id="trapezium1"></div>
                <p
                  onClick={() => {
                    this.handleScroll("cumrap");
                  }}
                >
                  <span>Cụm Rạp</span>
                </p>
                <div id="trapezium2"></div>
              </div>
              <div className="header__menu--1">
                <div id="trapezium1"></div>
                <p
                  onClick={() => {
                    this.handleScroll("tintuc");
                  }}
                >
                  <span>Tin Tức</span>
                </p>
                <div id="trapezium2"></div>
              </div>
              <div className="header__menu--1">
                <div id="trapezium1"></div>
                <p
                  onClick={() => {
                    this.handleScroll("ungdung");
                  }}
                >
                  <span>Ứng Dụng</span>
                </p>
                <div id="trapezium2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
