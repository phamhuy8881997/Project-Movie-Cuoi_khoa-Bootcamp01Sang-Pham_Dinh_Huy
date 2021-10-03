import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./adminHeader.scss";
import { withRouter } from "react-router";
import { memo } from "react";

const ImageAvatar =
  require(`../../../../access/images/image/avatar.png`).default;
class AdminHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("userLogin"));
    this.setState({ user: user });
  }
  LinkTo = (value) => {
    this.props.history.push(value);
  };
  render() {
    let { user } = this.state;
    return (
      <Fragment>
        <input type="checkbox" id="checkDasboard" />
        <section className="adminHeader">
          <div className="adminHeader__icon">
            <label htmlFor="checkDasboard">
              <i className="fa fa-align-justify"></i>
            </label>
          </div>
          <div className="adminHeader__user">
            <img src={ImageAvatar} alt="..." />
            <p>{user.hoTen}</p>
          </div>
          <div
            className="adminHeader__item"
            id="adminAT1"
            onClick={() => {
              this.LinkTo("/admin");
            }}
          >
            <i className="fa fa-folder-minus"></i>
            <a href="/admin" className="adminHeader__item-text">
              Danh Sách Phim
            </a>
          </div>
          <div
            className="adminHeader__item"
            id="adminAT1"
            onClick={() => {
              this.LinkTo("/add-movie");
            }}
          >
            <i className="fa fa-film"></i>
            <Link className="adminHeader__item-text" to="/add-movie">
              Thêm Phim
            </Link>
          </div>
          <div
            className="adminHeader__item"
            id="adminAT2"
            onClick={() => {
              this.LinkTo("/add-time");
            }}
          >
            <i className="fa fa-clock"></i>
            <Link className="adminHeader__item-text" to="/add-time">
              Thêm Lịch Chiếu
            </Link>
          </div>
          <div
            className="adminHeader__item"
            id="adminAT3"
            onClick={() => {
              this.LinkTo("/data-user");
            }}
          >
            <i className="fa fa-users"></i>
            <Link className="adminHeader__item-text" to="/data-user">
              Danh Sách{" "}
            </Link>
          </div>
          <div
            className="adminHeader__item"
            onClick={() => {
              this.LinkTo("/");
            }}
          >
            <i className="fa fa-home"></i>
            <a href="/" className="adminHeader__item-text">
              Trang Chủ{" "}
            </a>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(memo(AdminHeader));
