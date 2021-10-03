import React, { Component, Fragment } from "react";
import "./addTime.scss";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router";
import { toast } from "react-toastify";

const arrList = [
  {
    maRap: 451,
    tenCumRap: "BHD Star Cineplex - 3/2",
  },
  {
    maRap: 511,
    tenCumRap: "CGV - Aeon Bình Tân",
  },
  {
    maRap: 721,
    tenCumRap: "CNS - Hai Bà Trưng",
  },
  {
    maRap: 741,
    tenCumRap: "GLX - Huỳnh Tấn Phát",
  },
  {
    maRap: 821,
    tenCumRap: "Lotte - Cantavil",
  },
  {
    maRap: 901,
    tenCumRap: "MegaGS - Cao Thắng",
  },
];

class AddTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: "",
      ngayChieuGioChieu: "",
      maRap: 451,
    };
  }
  //==========================================
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //==========================================
  handleAddTime = () => {
    let { maPhim, ngayChieuGioChieu, maRap } = this.state;
    let data = {
      maPhim: parseInt(maPhim),
      ngayChieuGioChieu: ngayChieuGioChieu,
      maRap: parseInt(maRap),
      giaVe: 90000,
    };
    if (maPhim === "" || ngayChieuGioChieu === "") {
      toast.error(`⚠️ Vui Lòng không Bỏ Trống Dữ Liệu ! `, {
        position: "top-center",
        autoClose: 3000,
        pauseOnHover: false,
      });
    } else {
      if (window.confirm("Bạn muốn thêm lịch chiếu ?")) {
        console.log(data);
        this.props.addTime(data);
      }
    }
  };
  //==========================================
  renderOption = () => {
    let resule = "";
    resule = arrList.map((item, i) => {
      return (
        <option key={`ngeq${i}`} value={item.maRap}>
          {item.tenCumRap}
        </option>
      );
    });
    return resule;
  };
  render() {
    let { maPhim, ngayChieuGioChieu, maRap } = this.state;
    return (
      <Fragment>
        <section className="add__time">
          <div className="add__time1">
            <div className="add__time-title">
              <h1>Thêm Lịch chiếu</h1>
            </div>
            <div className="add__time-input">
              <div className="add__time-input1">
                <p>Mã Phim</p>
                <input
                  type="number"
                  name="maPhim"
                  value={maPhim}
                  id="maPhim"
                  onChange={this.handleChange}
                  placeholder="mã phim vd( 3578 )"
                />
              </div>
              <div className="add__time-input1">
                <p>Giờ Chiếu</p>
                <input
                  type="text"
                  name="ngayChieuGioChieu"
                  value={ngayChieuGioChieu}
                  id="ngayChieuGioChieu"
                  onChange={this.handleChange}
                  placeholder="vd(20-12-2021 10:20:00)"
                />
              </div>
              <div className="add__time-input2">
                <p>Chọn Rạp Chiếu</p>
                <select
                  name="maRap"
                  value={maRap}
                  id="maRap"
                  onChange={this.handleChange}
                  className="form-control"
                  required="required"
                >
                  {this.renderOption()}
                </select>
              </div>
            </div>
            <div className="add__time-btn">
              <button
                className="btn btn-warning"
                onClick={() => {
                  this.handleAddTime();
                }}
              >
                {" "}
                Thêm Lịch Chiếu
              </button>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDisPathToProps = (dispath, props) => {
  return {
    addTime: (data) => {
      dispath(action.push_movie_time_api(data));
    },
  };
};

export default connect(mapStateToProps, mapDisPathToProps)(withRouter(AddTime));

//ma phim 8419
//ma rap: 901 -> 910  // megaGS
//lich chiếu: 25-10-2021T00:00:00
