import React, { Component, Fragment } from "react";
import "./banner.scss";

import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import CartItem from "../Cart_item/cartItem";
import Loading from "../loading/loading";
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formload: "1",
      loadMore: 8,
      bannerAt: "banner-id1",
    };
  }
  //===============================================
  componentDidMount() {
    this.props.getListMovie();
  }
  //===============================================
  activeBanerClass = (value) => {
    let { bannerAt } = this.state;
    if (bannerAt === value) {
      return "no__at banner__active";
    } else {
      return "no__at";
    }
  };
  //===============================================
  handleLoadForm = (value) => {
    this.setState({ formload: value });
    // let header = document.getElementById("banner__header");
    // let btns = header.getElementsByClassName("no__at");
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener("click", function () {
    //     var current = document.getElementsByClassName("banner__active");
    //     current[0].className = current[0].className.replace(
    //       " banner__active",
    //       ""
    //     );
    //     this.className += " banner__active";
    //   });
    // }
  };
  //===============================================
  handeLoadMore = () => {
    let { loadMore } = this.state;
    this.setState({ loadMore: loadMore + 3 });
  };
  //===============================================
  renderCartItem = (value) => {
    let { listMovie } = this.props;
    let { loadMore } = this.state;
    let resule = "";
    let arrTemp = [];

    arrTemp = listMovie?.filter((item) => item.maPhim > value);

    resule = arrTemp?.slice(0, loadMore).map((item, i) => {
      return <CartItem key={`sdw${i}`} item={item} />;
    });
    return resule;
  };
  //===============================================
  //===============================================
  //===============================================
  //===============================================
  //===============================================
  render() {
    let { listMovie } = this.props;
    //console.log(listMovie.length);
    let { formload } = this.state;
    return (
      <Fragment>
        {listMovie.length === 0 ? (
          <Loading />
        ) : (
          <div id="lichchieu">
            <div className="banner__header" id="banner__header">
              <p
                onClick={() => {
                  this.handleLoadForm("1");
                  this.setState({ bannerAt: "banner-id1" });
                }}
                className={this.activeBanerClass("banner-id1")}
                id="banner-id1"
              >
                Đang Chiếu
              </p>
              <p
                onClick={() => {
                  this.handleLoadForm("2");
                  this.setState({ bannerAt: "banner-id2" });
                }}
                className={this.activeBanerClass("banner-id2")}
                id="banner-id2"
              >
                Sắp Chiếu
              </p>
              <p
                onClick={() => {
                  this.handleLoadForm("3");
                  this.setState({ bannerAt: "banner-id3" });
                }}
                className={this.activeBanerClass("banner-id3")}
                id="banner-id3"
              >
                Phim Hay{" "}
              </p>
              <p
                onClick={() => {
                  this.handleLoadForm("4");
                  this.setState({ bannerAt: "banner-id4" });
                }}
                className={this.activeBanerClass("banner-id4")}
                id="banner-id4"
              >
                Phim Lượt Xem Nhiều
              </p>
            </div>
            <section className="banner__main">
              {formload === "1" && (
                <div>
                  <div className="banner__item">{this.renderCartItem(0)}</div>
                  <div className="banner__btn text-center">
                    <button
                      type="button"
                      className="btn btn-warning btn-lg m-3"
                      onClick={() => {
                        this.handeLoadMore();
                      }}
                    >
                      Xem Thêm
                    </button>
                  </div>
                </div>
              )}
              {/* =========================== */}
              {formload === "2" && (
                <div>
                  <div className="banner__item">
                    {this.renderCartItem(2000)}
                  </div>
                  <div className="banner__btn text-center">
                    <button
                      type="button"
                      className="btn btn-warning btn-lg m-3"
                      onClick={() => {
                        this.handeLoadMore();
                      }}
                    >
                      Xem Thêm
                    </button>
                  </div>
                </div>
              )}
              {/* =========================== */}
              {formload === "3" && (
                <div>
                  <div className="banner__item">
                    {this.renderCartItem(3000)}
                  </div>
                  <div className="banner__btn text-center">
                    <button
                      type="button"
                      className="btn btn-warning btn-lg m-3"
                      onClick={() => {
                        this.handeLoadMore();
                      }}
                    >
                      Xem Thêm
                    </button>
                  </div>
                </div>
              )}
              {/* =========================== */}
              {formload === "4" && (
                <div>
                  <div className="banner__item">
                    {this.renderCartItem(4000)}
                  </div>
                  <div className="banner__btn text-center">
                    <button
                      type="button"
                      className="btn btn-warning btn-lg m-3"
                      onClick={() => {
                        this.handeLoadMore();
                      }}
                    >
                      Xem Thêm
                    </button>
                  </div>
                </div>
              )}
            </section>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.movie.movieList,
  };
};
const mapDisPathToProps = (dispath, props) => {
  return {
    getListMovie: () => {
      dispath(action.getMovieApi());
    },
  };
};

export default connect(mapStateToProps, mapDisPathToProps)(Banner);
