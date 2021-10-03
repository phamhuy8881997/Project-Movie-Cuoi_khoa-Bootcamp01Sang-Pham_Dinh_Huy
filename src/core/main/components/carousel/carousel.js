import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
import "./carousel.scss";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_show: false,
      trailer: "1",
    };
  }
  handleShowModal = () => {
    this.setState({ is_show: false });
  };
  //===================================================
  renderCarousel = () => {
    //let arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arr2 = [
      { cr: 2, mp: 8502 },
      { cr: 3, mp: 8527 },
      { cr: 4, mp: 8528 },
      { cr: 5, mp: 8529 },
      { cr: 6, mp: 8530 },
      { cr: 7, mp: 8531 },
      { cr: 8, mp: 8532 },
      { cr: 9, mp: 8533 },
      { cr: 10, mp: 8534 },
    ];
    let resule = "";
    resule = arr2.map((item, i) => {
      return (
        <div className="carousel-item" key={`carousel${i}`}>
          <img
            src={
              require(`../../../../access/images/image/carousel${item.cr}.jpg`)
                .default
            }
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption">
            <Link
              type="button"
              className="btn btn-warning btn__carousel btn-lg"
              to={`/movie-detail/${item.mp}`}
            >
              Xem Chi Tiết
            </Link>
          </div>
          <div
            className="overlay__carousel"
            onClick={() => {
              this.setState({ is_show: true, trailer: `${item.cr}` });
            }}
          >
            <div className="overlay__carousel--content">
              <i className="fa fa-play-circle"></i>
            </div>
          </div>
        </div>
      );
    });
    return resule;
  };
  //===================================================
  renderIndicators = () => {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let resule = "";
    resule = arr1.map((item, i) => {
      return (
        <li data-target="#my_carousel" data-slide-to={item} key={`za${i}`}></li>
      );
    });
    return resule;
  };
  //===================================================
  render() {
    let { is_show, trailer } = this.state;
    return (
      <Fragment>
        {is_show ? (
          <div
            onClick={() => {
              this.handleShowModal();
            }}
            className="background__modal"
          ></div>
        ) : null}
        <section className="carousel">
          <div
            id="my_carousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="2500"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#my_carousel"
                data-slide-to="0"
                className="active"
              ></li>
              {this.renderIndicators()}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={
                    require(`../../../../access/images/image/carousel1.jpg`)
                      .default
                  }
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption">
                  <Link
                    type="button"
                    className="btn btn-warning btn__carousel btn-lg"
                    to={`/movie-detail/8495`}
                  >
                    Xem Chi Tiết
                  </Link>
                </div>
                <div
                  className="overlay__carousel"
                  onClick={() => {
                    this.setState({ is_show: true, trailer: "1" });
                  }}
                >
                  <div className="overlay__carousel--content">
                    <i className="fa fa-play-circle"></i>
                  </div>
                </div>
              </div>
              {this.renderCarousel()}
            </div>
            <a
              className="carousel-control-prev"
              href="#my_carousel"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-double-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#my_carousel"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
          <Modal
            show={is_show}
            close={this.handleShowModal}
            trailer={trailer}
          />
        </section>
      </Fragment>
    );
  }
}

export default Carousel;
