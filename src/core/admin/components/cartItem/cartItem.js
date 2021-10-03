import React, { Component } from "react";
import "./cartItem.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "./../../../../redux/action/index";

class CartItem extends Component {
  handleDeleteMovie = (maPhim) => {
    if (window.confirm("xác nhận xóa lần 1 ?")) {
      if (window.confirm("xác nhận xóa lần 2 ?")) {
        if (window.confirm("xác nhận xóa lần 3 ?")) {
          this.props.deleteMovie(maPhim);
        }
      }
    }
  };
  render() {
    let { item } = this.props;
    return (
      <div className="cart__admin">
        <div className="cart__admin--img">
          <img src={item.hinhAnh} alt="..." />
        </div>
        <div className="cart__admin--text">
          <p>tên Phim: {item.tenPhim}</p>
          <p>Mã Phim: {item.maPhim}</p>
          <Link className="btn btn-info" to={`/movie-detail/${item.maPhim}`}>
            Thông Tin
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.handleDeleteMovie(item.maPhim);
            }}
          >
            Xóa Phim
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispathToProps = (dispath, props) => {
  return {
    deleteMovie: (maPhim) => {
      dispath(action.delete_movie_api(maPhim));
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(CartItem);
