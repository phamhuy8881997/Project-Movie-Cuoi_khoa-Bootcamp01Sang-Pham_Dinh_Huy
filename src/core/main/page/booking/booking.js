import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router";
import Loading from "../../components/loading/loading";
import "./booking.scss";
import { toast } from "react-toastify";
class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //==========================================
  componentDidMount() {
    window.scrollTo(0, 0);
    const { id } = this.props.match.params;
    this.props.getListChair(id);
  }
  //==========================================
  renderListChair = () => {
    let { listChair } = this.props;
    let resule = "";
    resule = listChair?.danhSachGhe.map((item, i) => {
      return (
        <button
          key={`chair${i}`}
          type="button"
          className={this.statusChair(item)}
          id="booking__chair"
          disabled={item.daDat}
          onClick={() => {
            this.handleStatusChair(item.maGhe);
          }}
        >
          {item.tenGhe}
        </button>
      );
    });
    return resule;
  };
  //==========================================
  statusChair = (item) => {
    if (item.daDat) {
      return "btn btn-danger";
    } else {
      if (item.dangChon === undefined) {
        return "btn btn-warning";
      } else {
        if (item.dangChon) {
          return "btn btn-info";
        } else {
          return "btn btn-warning";
        }
      }
    }
  };
  //==========================================
  handleStatusChair = (maGhe) => {
    this.props.bookingChair(maGhe);
  };
  //==========================================
  handleBookingApi = () => {
    let { listChair } = this.props;
    let danhSachGheChon = listChair.danhSachGhe?.filter(
      (item) => item.dangChon === true
    );
    let maLichChieu = listChair.thongTinPhim.maLichChieu;
    //console.log(danhSachGheChon, maLichChieu);
    let history = this.props.history;
    if (danhSachGheChon.length === 0) {
      toast.error(`?????? Vui L??ng Ch???n ??t Nh???t 1 Gh??? !  `, {
        position: "top-center",
        autoClose: 4000,
        pauseOnHover: false,
      });
    } else if (window.confirm("x??c nh???n ?????t gh???")) {
      this.props.bookingApi(maLichChieu, danhSachGheChon, history);
    }
  };
  //==========================================
  render() {
    let { listChair } = this.props;
    //console.log(this.props.listChair);
    return (
      <Fragment>
        {listChair.thongTinPhim === undefined ? (
          <Loading />
        ) : (
          <section className="booking__page">
            <div className="booking__header">
              <div className="booking__header--img">
                <img src={listChair?.thongTinPhim.hinhAnh} alt="..." />
              </div>
              <div className="booking__header--text">
                <p>M?? L???ch Chi???u: {listChair?.thongTinPhim.maLichChieu}</p>
                <p>C???m R???p: {listChair?.thongTinPhim.tenCumRap}</p>
                <p>?????a Ch???: {listChair?.thongTinPhim.diaChi}</p>
                <p>Ng??y Chi???u: {listChair?.thongTinPhim.ngayChieu}</p>
                <p>Gi??? Chi???u: {listChair?.thongTinPhim.gioChieu}</p>
                <p>T??n Phim: {listChair?.thongTinPhim.tenPhim}</p>
                <p>R???p: {listChair?.thongTinPhim.tenRap}</p>
              </div>
            </div>
            <div className="booking__body">
              <div className="text-center">
                <h2>Danh S??ch Gh???</h2>
              </div>
              <div className="booking--screen">M??n H??nh Chi???u</div>
              <div className="booking__body--content">
                {this.renderListChair()}
                <div className="booking--item1"></div>
                <div className="booking--item2"></div>
                <div className="booking--item3"></div>
                <div className="booking--item4"></div>
                <div className="booking--item5"></div>
              </div>
              <div className="text-center">
                <span
                  className="text__mobile"
                  style={{ opacity: "0", color: "#f00" }}
                >
                  ----- vui l??ng tr?????t sang 2 b??n ????? ch???n gh??? ----{" "}
                </span>
              </div>
            </div>
            <div className="booking__foodter">
              <div>
                <h4>Tr???ng Th??i Gh???</h4>
                <div className="status__chair">
                  <div className="status__chair--text">
                    <button type="button" className="btn btn-danger btn-sm">
                      1
                    </button>{" "}
                    <span> Gh??? ???? C?? Ng?????i ?????t</span>
                  </div>
                  <div className="status__chair--text">
                    <button type="button" className="btn btn-warning">
                      1
                    </button>{" "}
                    <span> Gh??? Ch??a C?? Ng?????i ?????t</span>
                  </div>
                  <div className="status__chair--text">
                    <button type="button" className="btn btn-info">
                      1
                    </button>{" "}
                    <span> Gh??? ??ang Ch???n</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-info"
                onClick={() => {
                  this.handleBookingApi();
                }}
              >
                ?????t V?? Ngay
              </button>
            </div>
          </section>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listChair: state.listChair,
  };
};
const mapDisPathToProps = (dispath, props) => {
  return {
    getListChair: (id) => {
      dispath(action.getListChairApi(id));
    },
    bookingChair: (maghe) => {
      dispath(action.bookingChair(maghe));
    },
    bookingApi: (maLichChieu, danhSachGhe, history) => {
      dispath(action.bookingApi(maLichChieu, danhSachGhe, history));
    },
  };
};

export default connect(mapStateToProps, mapDisPathToProps)(withRouter(Booking));

// diaChi: "T???ng 4, Trung t??m th????ng m???i Golden Plaza, 922 Nguy???n Tr??i, P. 14, Q. 5"
// gioChieu: "10:01"
// hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld_gp09.jpg"
// maLichChieu: 21391
// ngayChieu: "01/01/2019"
// tenCumRap: "CGV - Golden Plaza"
// tenPhim: "Jurassic World"
// tenRap: "R???p 5"
