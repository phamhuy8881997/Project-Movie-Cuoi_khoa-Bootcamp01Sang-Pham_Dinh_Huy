import React, { Component, Fragment } from "react";
import "./show_time.scss";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router";
import Loading from "../loading/loading";
const dateFormat = require("date-format");
class ShowTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { taiKhoan: "NoLogin" },
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovieDetail(id);
    if (localStorage.getItem("userLogin")) {
      let user = JSON.parse(localStorage.getItem("userLogin"));
      this.setState({ user: user });
    }
  }
  renderShowTime = () => {
    let { lichChieu, history } = this.props;
    let resule = "";
    resule = lichChieu?.map((item, i) => {
      return (
        <Fragment key={`zsq${i}`}>
          <tr>
            <td rowSpan="3" className="bg__color-showtime">
              {i + 1}{" "}
            </td>
            <td>{item.thongTinRap.maHeThongRap}</td>

            <td>Tên Phim: {item.tenPhim}</td>
            <td>Giá vé: {item.giaVe}</td>
            <td>
              {dateFormat("hh:mm dd/MM/yyyy", new Date(item.ngayChieuGioChieu))}
            </td>
          </tr>
          <tr>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>Mã Phim:{item.maPhim}</td>
            <td>Mã Rạp:{item.maRap}</td>
            <td>Tên Rạp:{item.thongTinRap.tenRap}</td>
          </tr>
          <tr>
            <td colSpan="5">
              {this.state.user.taiKhoan === "NoLogin" ? (
                <button
                  type="button"
                  className="btn btn-warning btn-lg"
                  onClick={() => {
                    history.push(`/login`);
                  }}
                >
                  Đặt Vé
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-warning btn-lg"
                  onClick={() => {
                    history.push(`/booking/${item.maLichChieu}`);
                  }}
                >
                  Đặt Vé
                </button>
              )}
            </td>
          </tr>
          <tr>
            <td colSpan="5">
              <hr />
            </td>
          </tr>
        </Fragment>
      );
    });
    return resule;
  };
  handleBooking = () => {};
  render() {
    let { lichChieu } = this.props;
    //lichChieu = undefined;
    return (
      <div className="show__time">
        <h1>Danh Sách Lịch Chiếu</h1>
        {lichChieu === undefined ? (
          <Loading />
        ) : (
          <div className="show__time--table" id="scrollAdmin">
            <table className="table table-bordered table-hover">
              <thead className="text-center">
                <tr className="bg__color-showtime">
                  <th>STT</th>
                  <th>Hệ Thống Rạp</th>
                  <th colSpan="3">Thông tin</th>
                </tr>
              </thead>
              <tbody className="text-center">{this.renderShowTime()}</tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.movie.movieList,
    lichChieu: state.movie.movieDetail.lichChieu,
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
)(withRouter(ShowTime));

// giaVe: 75000
// maLichChieu: 18961
// maPhim: 1367
// maRap: 520
// ngayChieuGioChieu: "2019-01-01T10:10:00"
// tenPhim: "Cá mập siêu bạo chúa"
// thoiLuong: 120
// thongTinRap:{
// maCumRap: "cgv-aeon-binh-tan"
// maHeThongRap: "CGV"
// maRap: 520
// tenCumRap: "CGV - Aeon Bình Tân"
// tenHeThongRap: "cgv"
// tenRap: "Rạp 10"
//}
