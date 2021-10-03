import React, { Component, Fragment } from "react";
import "./theater.scss";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import Loading from "../loading/loading";
import { withRouter } from "react-router";

const dateFormat = require("date-format");
class Theater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { taiKhoan: "NoLogin" },
      maHeThongRap: "BHDStar",
      maCumRap: "bhd-star-cineplex-3-2",
      tenCumRap: "BHD Star Cineplex - 3/2",
      activeTH1: "theater1-at0",
      activeTH2: "theater2-at0",
    };
  }
  componentDidMount() {
    this.props.logoTheater();
    this.props.listTheater("BHDStar");
    this.props.infoTheater("BHDStar");
    this.props.timeTheater(1322);
    if (localStorage.getItem("userLogin")) {
      let user = JSON.parse(localStorage.getItem("userLogin"));
      this.setState({ user: user });
    }
  }
  componentDidUpdate() {}
  //===========================================
  //=============theader1======================
  //===========================================
  renderLogo = () => {
    let { logoTheater1 } = this.props;
    let resule = "";
    resule = logoTheater1?.map((item, i) => {
      return (
        <div
          className={this.addClassActiveTH1(`theater1-at${i}`)}
          key={`vdka${i}`}
          onClick={() => {
            this.handleActive(item.maHeThongRap);
            this.handleSetActiveLogo(`theater1-at${i}`);
          }}
          id={`theater1-at${i}`}
        >
          <div className="logo__img">
            <img src={item.logo} alt="..." />
          </div>
          <p>{item.maHeThongRap}</p>
          <div className="hr__logo" />
        </div>
      );
    });
    return resule;
  };
  //===========================================
  renderLogoActive = () => {
    let { logoTheater1 } = this.props;
    let resule = "";
    resule = logoTheater1?.slice(0, 1).map((item, i) => {
      return (
        <div
          className="theater1-logo active__logo"
          key={`vdka${i}`}
          onClick={() => {
            this.handleActive(item.maHeThongRap);
          }}
        >
          <div className="logo__img">
            <img src={item.logo} alt="..." />
          </div>
          <p>{item.maHeThongRap}</p>
          <div className="hr__logo" />
        </div>
      );
    });
    return resule;
  };
  //==========active class=====================
  handleSetActiveLogo = (id) => {
    this.setState({
      activeTH1: id,
    });
  };
  addClassActiveTH1 = (id) => {
    let { activeTH1 } = this.state;
    if (activeTH1 === id) {
      return "theater1-logo active__logo";
    } else {
      return "theater1-logo";
    }
  };
  //===========================================
  handleActive = (item) => {
    this.setState({ maHeThongRap: item });
    this.props.listTheater(item);
    this.props.infoTheater(item);
    //===================state-render-time==================
    setTimeout(() => {
      switch (item) {
        case "BHDStar":
          this.setState({ maCumRap: "bhd-star-cineplex-3-2" });
          //this.handleListTheater("bhd-star-cineplex-3-2");
          break;
        case "CGV":
          this.setState({ maCumRap: "cgv-aeon-binh-tan" });
          //this.handleListTheater("cgv-aeon-binh-tan");
          break;
        case "CineStar":
          this.setState({ maCumRap: "cns-hai-ba-trung" });
          //this.handleListTheater("cns-hai-ba-trung");
          break;
        case "Galaxy":
          this.setState({ maCumRap: "glx-huynh-tan-phat" });
          //this.handleListTheater("glx-huynh-tan-phat");
          break;
        case "LotteCinima":
          this.setState({ maCumRap: "lotte-cantavil" });
          //this.handleListTheater("lotte-cantavil");
          break;
        case "MegaGS":
          this.setState({ maCumRap: "megags-cao-thang" });
          //this.handleListTheater("megags-cao-thang");
          break;
        default:
          break;
      }
    }, 50);
    //===================state-render-time==================
    // let header = document.getElementById("theater1");
    // let btns = header.getElementsByClassName("theater1-logo");
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener("click", function () {
    //     var current = document.getElementsByClassName("active__logo");
    //     current[0].className = current[0].className.replace(
    //       " active__logo",
    //       " "
    //     );
    //     this.className += " active__logo";
    //   });
    // }
  };
  //===========================================
  //=============theader2======================
  //===========================================
  renderListTheater = () => {
    //let { maHeThongRap } = this.state;
    let { listTheater1 } = this.props;
    let resule = "";
    resule = listTheater1?.slice(0, 6).map((item, i) => {
      return (
        <div
          key={`lkxs${i}`}
          className={this.addClassActiveTH2(`theater2-at${i}`)}
          onClick={() => {
            this.handleListTheater(item.maCumRap, item.tenCumRap);
            this.handleSetActive(`theater2-at${i}`);
          }}
          id={`theater2-at${i}`}
        >
          <div className="theater2-img">
            <img
              src={
                require(`../../../../access/images/image/rap${i + 1}.jpg`)
                  .default
              }
              alt="..."
            />
          </div>
          <div className="theater2-text">
            <p className="theater2-text-1">{item.diaChi}</p>
            <p>{item.tenCumRap}</p>
          </div>
        </div>
      );
    });
    return resule;
  };
  //===============active class================
  handleSetActive = (id) => {
    this.setState({ activeTH2: id });
  };
  addClassActiveTH2 = (id) => {
    let { activeTH2 } = this.state;
    if (activeTH2 === id) {
      return "theater2-item theater2-active";
    } else {
      return "theater2-item";
    }
  };
  //===========================================
  handleListTheater = (maCumRap, tenCumRap) => {
    this.setState({
      maCumRap: maCumRap,
      tenCumRap: tenCumRap,
    });
  };
  //===========================================
  //=============theader3======================
  //===========================================
  renderTheaterInfo = () => {
    let { infoTheater1 } = this.props;
    let { maCumRap } = this.state;
    let resule = "";
    if (infoTheater1.length !== 0) {
      let dataTemp = infoTheater1[0].lstCumRap?.filter(
        (item) => item.maCumRap === maCumRap
      );
      resule = dataTemp[0]?.danhSachPhim.map((item, i) => {
        //console.log(dataTemp[0]?.danhSachPhim);
        return (
          <div key={`qisa${i}`} className="theater3-item">
            <div
              className="item-img"
              onClick={() => {
                this.movieDetailTo(item.maPhim);
              }}
            >
              <img src={item.hinhAnh} alt="..." />
              <p>{item.tenPhim}</p>
            </div>
            <div className="item-time">
              {this.renderTime(item.lstLichChieuTheoPhim)}
            </div>
          </div>
        );
      });
      //console.log(dataTemp);
    }

    return resule;
  };
  //===========================================
  renderTime = (item) => {
    let resule = "";
    resule = item?.map((time, i) => {
      return (
        <p
          key={`avfe${i}`}
          onClick={() => {
            this.handleBookingTo(time.maLichChieu);
          }}
        >
          {dateFormat("hh : mm", new Date(time.ngayChieuGioChieu))}
        </p>
      );
    });
    return resule;
  };
  //===========================================
  handleBookingTo = (maLichChieu) => {
    if (this.state.user.taiKhoan === "NoLogin") {
      this.props.history.push(`/login`);
    } else {
      this.props.history.push(`/booking/${maLichChieu}`);
    }
  };
  //===========================================
  movieDetailTo = (maPhim) => {
    this.props.history.push(`/movie-detail/${maPhim}`);
  };
  //===========================================
  //===========================================
  render() {
    let { logoTheater1, listTheater1, infoTheater1 } = this.props;
    //console.log(logoTheater1.length, listTheater1.length, infoTheater1.length);
    //console.log(listTheater1);
    return (
      <Fragment>
        <div className="text-center theater__header mb-5 " id="cumrap">
          <div className="theater__header-over">
            <h1>CỤM RẠP</h1>
          </div>
        </div>
        {logoTheater1.length === 0 ||
        listTheater1.length === 0 ||
        infoTheater1.length === 0 ? (
          <Loading />
        ) : (
          <section className="theater__page">
            <div className="theater__content">
              <div className="theater1" id="theater1">
                {/* {this.renderLogoActive()} */}
                {this.renderLogo()}
              </div>
              <div className="theater2" id="scrollAdmin">
                {/* {this.renderListTheaterActive()} */}
                {this.renderListTheater()}
              </div>
              <div className="theater3" id="scrollAdmin">
                <h3 className="text-center th3-text">Xuất Chiếu</h3>
                <h4
                  className="text-center th3-text"
                  style={{ marginTop: "-35px" }}
                >
                  {this.state.tenCumRap}
                </h4>
                {this.renderTheaterInfo()}
              </div>
              <div className="theater4"></div>
            </div>
          </section>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logoTheater1: state.theater.logoTheater,
    listTheater1: state.theater.listTheater,
    infoTheater1: state.theater.infoTheater,
    timeTheater1: state.theater.timeTheater,
  };
};
const mapDisPathToProps = (dispath, props) => {
  return {
    logoTheater: () => {
      dispath(action.get_theater_api());
    },
    listTheater: (maRapPhim) => {
      dispath(action.get_theater_list_api(maRapPhim));
    },
    infoTheater: (maRapPhim) => {
      dispath(action.get_theater_info_api(maRapPhim));
    },
    timeTheater: (maPhim) => {
      dispath(action.get_theater_time_api(maPhim));
    },
  };
};

export default connect(mapStateToProps, mapDisPathToProps)(withRouter(Theater));
