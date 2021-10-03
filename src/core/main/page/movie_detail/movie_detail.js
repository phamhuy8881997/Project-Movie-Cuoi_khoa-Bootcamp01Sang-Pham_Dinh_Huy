import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router";
import "./detail.scss";
import Modal1 from "../../components/modal/modal1";
import ShowTime from "../../components/show_time/show_time";
import Loading from "../../components/loading/loading";

const dateFormat = require("date-format");

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_show1: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    const { id } = this.props.match.params;
    this.props.getMovieDetail(id);
  }
  handleShowModal1 = () => {
    this.setState({ is_show1: false });
  };
  render() {
    let { movieDetail } = this.props;
    let { is_show1 } = this.state;
    //console.log(movieDetail);
    return (
      <Fragment>
        {is_show1 ? (
          <div
            onClick={() => {
              this.handleShowModal1();
            }}
            className="background__modal"
          ></div>
        ) : null}
        <Modal1
          show={is_show1}
          close={this.handleShowModal1}
          myIfram={movieDetail.trailer}
        />

        <section className="movie__detail">
          {movieDetail.maPhim === undefined ? (
            <Loading />
          ) : (
            <div
              className="movie__detail--content"
              style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}
            >
              <div className="detail__header">
                <div
                  className="detail__img"
                  onClick={() => {
                    this.setState({ is_show1: true });
                  }}
                >
                  <img src={movieDetail.hinhAnh} alt="..." />
                  <div className="detail__img--overlay">
                    <i className="fa fa-play-circle"></i>
                  </div>
                </div>
                <div className="detail__text">
                  <p>Tên Phim: {movieDetail.tenPhim}</p>
                  <p>
                    Ngày Khởi Chiếu:{" "}
                    {dateFormat(
                      "hh:mm dd/MM/yyyy",
                      new Date(movieDetail.ngayKhoiChieu)
                    )}
                  </p>
                  <p>Đánh Giá: {movieDetail.danhGia}/10</p>
                  <p>
                    Mã Nhóm:{" "}
                    <span className="manhom">{movieDetail.maNhom}</span>
                  </p>
                  <p>Mã Phim: {movieDetail.maPhim}</p>
                  <p>Định Dạng: 2D / 3D / 3D IMAX </p>
                  <p>
                    <span>IMDb: 4.2/5</span>
                    <i className="fa fa-star ml-3"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                    <i className="fa fa-star-half-alt"></i>
                  </p>
                  <button
                    className="btn btn-danger btn-lg"
                    onClick={() => {
                      this.setState({ is_show1: true });
                    }}
                  >
                    Trailer
                  </button>
                </div>
              </div>
              <div className="detail__body">
                <div
                  className="text-center"
                  style={{ color: "aqua", marginBottom: "40px" }}
                >
                  <h2>Thông tin</h2>
                </div>
                <div className="detail__body--text">
                  <div>
                    <p>
                      <span className="text--red">Đạo Diễn:</span>{" "}
                      {movieDetail.biDanh}
                    </p>
                    <p>
                      <span className="text--red">Đánh Giá:</span> 3.5/5
                    </p>
                    <p>
                      <span className="text--red">Ngày Khởi Chiếu:</span>
                      {dateFormat(
                        "dd/MM/yyyy hh:mm",
                        new Date(movieDetail.ngayKhoiChieu)
                      )}
                    </p>
                    <p>
                      <span className="text--red">Thể Loại:</span> Hành
                      Động/Phiêu Lưu/Giả Tưởng
                    </p>
                    <p>
                      <span className="text--red">IMDb:</span>
                      <span> 4.2/5</span>
                      <i className="fa fa-star ml-3"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-alt"></i>
                      <i className="fa fa-star-half-alt"></i>
                    </p>
                    <p>
                      {" "}
                      <span className="text--red">Quốc Gia:</span> Việt Nam
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="text--red">Mô Tả: </span>{" "}
                      {movieDetail.moTa}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="movie__detail--booking">
            <ShowTime />
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.movie.movieList,
    movieDetail: state.movie.movieDetail,
  };
};
const mapDisPathToProps = (dispath, props) => {
  return {
    getListMovie: () => {
      dispath(action.getMovieApi());
    },
    getMovieDetail: (id) => {
      dispath(action.getMovieDetailApi(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDisPathToProps
)(withRouter(MovieDetail));
