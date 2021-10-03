import React, { Component, Fragment } from "react";
import "./navbar.scss";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router";

const dateFormat = require("date-format");
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { taiKhoan: "NoLogin" },
      maPhim: "",
      cumRap: "",
      rapChieu: "",
      xuatChieu: "",
    };
  }
  //===============================================
  componentDidMount() {
    this.props.getListMovie();
    if (localStorage.getItem("userLogin")) {
      let user = JSON.parse(localStorage.getItem("userLogin"));
      this.setState({ user: user });
    }
  }
  //===============================================
  handleChange = (e) => {
    let { cumRap, rapChieu, xuatChieu } = this.state;
    if (cumRap !== "" || rapChieu !== "" || xuatChieu !== "") {
      this.setState({
        cumRap: "",
        rapChieu: "",
        xuatChieu: "",
      });
    }
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
    this.props.getTheaterTime(value);
  };
  handleChange1 = (e) => {
    let { rapChieu, xuatChieu } = this.state;
    if (rapChieu !== "" || xuatChieu !== "") {
      this.setState({
        rapChieu: "",
        xuatChieu: "",
      });
    }
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
    //this.props.getTheaterTime(value);
  };
  handleChange2 = (e) => {
    let { xuatChieu } = this.state;
    if (xuatChieu !== "") {
      this.setState({
        xuatChieu: "",
      });
    }
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
    //this.props.getTheaterTime(value);
  };
  handleChange3 = (e) => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  };
  //==============================================
  renderNameMovie = () => {
    let { listMovie } = this.props;
    let resule;
    resule = listMovie?.map((item, i) => {
      return (
        <option key={`gnmhg${i}`} value={item.maPhim}>
          {item.tenPhim}
        </option>
      );
    });
    return resule;
  };
  //==============================================
  renderTheaterMovie = () => {
    let { theaterTime } = this.props;
    //let { maPhim } = this.state;
    let resule = "";
    if (theaterTime.heThongRapChieu === undefined) {
      resule = <option>Vui Lòng Chọn</option>;
    } else {
      resule = theaterTime?.heThongRapChieu.map((item, i) => {
        return (
          <option key={`gnxxhg${i}`} value={item.maHeThongRap}>
            {item.tenHeThongRap}
          </option>
        );
      });
    }

    return resule;
  };
  //==============================================
  renderTheaterMovieItem = () => {
    let { cumRap } = this.state;
    let { theaterTime } = this.props;
    let resule = "";
    if (theaterTime.heThongRapChieu === undefined) {
      resule = <option>Vui Lòng Chọn</option>;
    } else {
      let arrTemp = theaterTime?.heThongRapChieu.filter(
        (item) => item.maHeThongRap === cumRap
      );
      //console.log(arrTemp[0].cumRapChieu);
      resule = arrTemp[0].cumRapChieu.map((item, i) => {
        return (
          <option key={`gqqxhg${i}`} value={item.maCumRap}>
            {item.tenCumRap}
          </option>
        );
      });
    }

    return resule;
  };
  //==============================================
  renderXuatChieu = () => {
    let { cumRap, rapChieu } = this.state;
    let { theaterTime } = this.props;
    let resule = "";
    if (theaterTime.heThongRapChieu === undefined) {
      resule = <option>Vui Lòng Chọn</option>;
    } else {
      let arrTemp = theaterTime?.heThongRapChieu.filter(
        (item) => item.maHeThongRap === cumRap
      );
      let arrTemp1 = arrTemp[0].cumRapChieu.filter(
        (item) => item.maCumRap === rapChieu
      );
      //console.log(arrTemp1[0].lichChieuPhim);
      resule = arrTemp1[0].lichChieuPhim.map((item, i) => {
        return (
          <option key={`bbnnxhg${i}`} value={item.maLichChieu}>
            {dateFormat("hh:mm dd/MM/yyyy", new Date(item.ngayChieuGioChieu))}
          </option>
        );
      });
    }
    return resule;
  };
  //==============================================
  handleOnBooking = () => {
    let { xuatChieu } = this.state;
    if (this.state.user.taiKhoan === "NoLogin") {
      this.props.history.push(`/login`);
    } else {
      this.props.history.push(`/booking/${xuatChieu}`);
    }
  };
  //==============================================
  render() {
    //console.log(this.state.maPhim);
    //console.log(this.state.rapChieu);
    //console.log(this.props.theaterTime);
    //console.log("rap:", this.state.rapChieu);
    //console.log("xuat chieu:", xuatChieu);
    let { maPhim, cumRap, rapChieu, xuatChieu } = this.state;
    return (
      <section className="navbar__main">
        <div className="navbar__main--title">
          <h2>ĐẶT VÉ NHANH</h2>
        </div>
        <div className="row booking__to1">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mb-5">
            <select
              name="maPhim"
              id="scrollAdmin"
              className="form-control"
              required="required"
              onChange={this.handleChange}
            >
              <option value="">------Chọn Phim-----</option>
              {this.renderNameMovie()}
            </select>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mb-5">
            <select
              name="cumRap"
              id="scrollAdmin"
              className="form-control"
              required="required"
              onChange={this.handleChange1}
            >
              {maPhim !== "" ? (
                <Fragment>
                  <option value="">Chọn Cụm Rạp...</option>
                  {this.renderTheaterMovie()}
                </Fragment>
              ) : (
                <option value="">Vui Lòng Chọn Phim</option>
              )}
            </select>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mb-5">
            <select
              name="rapChieu"
              id="scrollAdmin"
              className="form-control"
              required="required"
              onChange={this.handleChange2}
            >
              {cumRap !== "" ? (
                <Fragment>
                  <option value="">Chọn Rạp Chiếu...</option>
                  {this.renderTheaterMovieItem()}
                </Fragment>
              ) : (
                <option value="">Vui Lòng Chọn Cụm Rạp</option>
              )}
            </select>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mb-5">
            <select
              name="xuatChieu"
              id="scrollAdmin"
              className="form-control"
              required="required"
              onChange={this.handleChange3}
            >
              {rapChieu !== "" ? (
                <Fragment>
                  <option value="">Vui Lòng Suất Chiếu...</option>
                  {this.renderXuatChieu()}
                </Fragment>
              ) : (
                <option value="">Vui Lòng Chọn Rạp Chiếu</option>
              )}
            </select>
          </div>
        </div>
        <div className="row booking__to2">
          <div>
            {xuatChieu === "" ? (
              <button type="button" className="btn btn-warning" disabled={true}>
                Đặt Vé Ngay
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  this.handleOnBooking();
                }}
              >
                Đặt Vé Ngay
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.movie.movieList,
    theaterTime: state.theaterNavbar,
  };
};
const mapDisPathToProps = (dispath, props) => {
  return {
    getListMovie: () => {
      dispath(action.getMovieApi());
    },
    getTheaterTime: (id) => {
      dispath(action.get_theater_time_api(id));
    },
  };
};

export default connect(mapStateToProps, mapDisPathToProps)(withRouter(Navbar));
