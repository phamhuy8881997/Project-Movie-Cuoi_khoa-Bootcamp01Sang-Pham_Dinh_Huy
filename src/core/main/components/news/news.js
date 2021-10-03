import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./news.scss";

const news1 = require(`../../../../access/images/image/news1.jpg`).default;
const news2 = require(`../../../../access/images/image/news2.jpg`).default;

class News extends Component {
  render() {
    return (
      <section className="news__page" id="tintuc">
        <div className="news__header">
          <div className="news__header-over">
            <h1>Tin tức Điện Ảnh</h1>
          </div>
        </div>
        <div className="news__body">
          <div className="news__item">
            <div className="news__img">
              <img src={news1} alt="..." />
            </div>
            <div className="news__text">
              <p>Tuần trước, trailer của Spider-man...</p>
              <p>Tobey Maguire tên thật là...</p>
              <Link className="btn btn-warning btn-lg btnToNew" to="/news/1">
                Chi Tiết...
              </Link>
            </div>
          </div>
          <div className="news__item">
            <div className="news__img">
              <img src={news2} alt="..." />
            </div>
            <div className="news__text">
              <p>Là phần phim độc lập với Suicide...</p>
              <p>Mặc dù kiếm được đến 750 triệu...</p>
              <Link className="btn btn-warning btn-lg btnToNew" to="/news/2">
                Chi Tiết...
              </Link>
            </div>
          </div>
        </div>
        <div className="news__foodter"></div>
      </section>
    );
  }
}

export default News;
