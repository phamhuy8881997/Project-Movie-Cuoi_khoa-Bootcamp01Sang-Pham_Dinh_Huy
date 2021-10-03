import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cartItem.scss";

class CartItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <section className="card" id="cart__item">
        <Link className="cart__img" to={`/movie-detail/${item.maPhim}`}>
          <img src={item.hinhAnh} className="card-img-top" alt="..." />
          <div className="cart__icon">
            <i className="fa fa-play-circle"></i>
          </div>
          <div className="cart__overlay"></div>
          <div className="trigger__left"></div>
          <div className="trigger__right"></div>
        </Link>
        <div className="cart__body">
          <div className="body__overlay"></div>
          <div className="body__text">
            <div>
              {item.tenPhim.length < 25 ? (
                <p>{item.tenPhim}</p>
              ) : (
                <p>{item.tenPhim.slice(0, 24)} ...</p>
              )}
            </div>
            <p>
              <span>thời Lượng: 90 Phút</span>
            </p>
            <p>
              <span className="i__IMDb mr-2">IMDb </span>
              <span> : 8.8 / </span>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-alt"></i>
              <i className="fa fa-star-half-alt"></i>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default CartItem;

// biDanh: "fight-for-my-way"
// danhGia: 10
// hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg"
// maNhom: "GP10"
// maPhim: 1338
// moTa: "The story is about underdogs with big dreams and third-rate specs struggling to survive, and craving for success with a career they're underqualified for. A long time friendship is blossoming into romance between two immature friends Ko Dong-man (Park Seo-joon) and Choi Ae-ra (Kim Ji-won) whose childish dynamic hasn't changed despite reaching adulthood"
// ngayKhoiChieu: "2021-04-06T07:07:38.223"
// tenPhim: "Fight for my way"
// trailer: "https://www.youtube.com/embed/9l5KoxFqQZY"
//src={require(`../../../../access/images/image/cart1.jpg`).default}
