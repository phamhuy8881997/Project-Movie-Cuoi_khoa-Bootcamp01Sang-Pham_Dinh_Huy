import React, { Component, Fragment } from "react";
import "./login.scss";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formload: "1",
      classActive: "login_at1",
      taikhoan: "",
      matkhau: "",
      soDienThoai: "",
      email: "",
      hoTen: "",
      taikhoanErr: "vui lòng nhập tài khoản",
      matkhauErr: "vui lòng nhập mật khẩu",
      soDienThoaiErr: "vui lòng nhập số điện thoại",
      emailErr: "vui lòng nhập Email",
      hoTenErr: "vui lòng nhập họ tên",
      //=============
      taikhoanC: "",
      matkhauC: "",
      matkhauN: "",
      emailN: "",
      soDtN: "",
      hoTenN: "",
      nguoiDungN: "KhachHang",
    };
  }
  //===============================================
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  //===============================================
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  //===============================================
  ActiveClass = (value) => {
    let { classActive } = this.state;
    if (classActive === value) {
      return "no__at1 login__active";
    } else {
      return "no__at1";
    }
  };
  //===============================================
  handleLoadForm = (value) => {
    this.setState({ formload: value });
  };
  //===============================================
  handeLogin = () => {
    let { taikhoan, matkhau } = this.state;
    const history = this.props.history;
    if (taikhoan === "" && matkhau === "") {
      toast.error(
        `⚠️ tài khoản và mật khẩu đang bỏ trống vui lòng nhập vào ! `,
        {
          position: "top-center",
          autoClose: 4000,
          pauseOnHover: false,
        }
      );
    } else if (taikhoan === "") {
      toast.error(`⚠️ tài khoản đang bỏ trống vui lòng nhập vào ! `, {
        position: "top-center",
        autoClose: 4000,
        pauseOnHover: false,
      });
    } else if (matkhau === "") {
      toast.error(`⚠️ mật khẩu đang bỏ trống vui lòng nhập vào ! `, {
        position: "top-center",
        autoClose: 4000,
        pauseOnHover: false,
      });
    } else {
      this.props.LoginApi(
        {
          taiKhoan: taikhoan,
          matKhau: matkhau,
        },
        history
      );
    }
  };
  //===============================================

  //===============================================
  validateField = (fieldName) => {
    let { taikhoan, matkhau, soDienThoai, email, hoTen } = this.state;
    //Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
    switch (fieldName) {
      case "taikhoan":
        let error = "";
        //let name_regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let name_regex = /[()<>?`}:{"~,|/[\]/!@#$%^&*)(+=._-]/gim;
        //let name_regex = /^[!@#\$%\^\&*\)\(+=._-]$/gim;
        let name_reg = /lol|dm|cc/gim;
        if (taikhoan.length < 6) {
          error = "tài khoản ít nhất 6 kí tự";
        } else if (taikhoan.length > 16) {
          error = "tài khoản tối đa 20 kí tự";
        } else if (name_regex.test(taikhoan.toLocaleLowerCase())) {
          error = "tài khoản có chứa kí tự không hợp lệ !";
        } else if (name_reg.test(taikhoan.toLocaleLowerCase())) {
          error = "tài khoản từ khóa không hợp lệ !";
        } else {
          error = "";
        }
        this.setState({ taikhoanErr: error });
        break;
      case "matkhau":
        let error1 = "";
        let name_regex1 = /lol|dm|cc|ok|@/gim;
        if (matkhau.length < 6) {
          error1 = "mật khẩu ít nhất 6 kí tự";
        } else if (matkhau.length > 16) {
          error1 = "mật khẩu tối đa 20 kí tự";
        } else if (name_regex1.test(matkhau.toLocaleLowerCase())) {
          error1 = "mật khẩu có chứa kí tự không hợp lệ !";
        } else {
          error1 = "";
        }
        this.setState({ matkhauErr: error1 });
        break;
      case "soDienThoai":
        let phone_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        let error2 = "";
        if (phone_regex.test(soDienThoai) === false) {
          error2 = "số điện thoại không hợp lệ !";
        } else {
          error2 = "";
        }
        this.setState({ soDienThoaiErr: error2 });
        break;
      case "email":
        let email_regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        let error3 = "";
        if (email_regex.test(email)) {
          error3 = "";
        } else {
          error3 = "Email không hợp lệ !";
        }
        this.setState({ emailErr: error3 });
        break;
      case "hoTen":
        let error4 = "";
        let name_regex4 = /lol|dm|cc|ok|@/gim;
        if (hoTen.length < 6) {
          error4 = "họ tên ít nhất 6 kí tự";
        } else if (hoTen.length > 16) {
          error4 = "họ tên tối đa 20 kí tự";
        } else if (name_regex4.test(hoTen.toLocaleLowerCase())) {
          error4 = "họ tên có chứa kí tự không hợp lệ !";
        } else {
          error4 = "";
        }
        this.setState({ hoTenErr: error4 });
        break;
      default:
        break;
    }
  };
  //===============================================
  handleSignIn = () => {
    let { taikhoanErr, matkhauErr, soDienThoaiErr, emailErr, hoTenErr } =
      this.state;
    let { taikhoan, matkhau, soDienThoai, email, hoTen } = this.state;
    if (
      taikhoanErr !== "" &&
      matkhauErr !== "" &&
      soDienThoaiErr !== "" &&
      emailErr !== "" &&
      hoTenErr !== ""
    ) {
      toast.error(`⚠️ Thông Tin không đủ  `, {
        position: "top-center",
        autoClose: 4000,
        pauseOnHover: false,
      });
    } else {
      if (window.confirm("Xác nhận muốn đăng kí")) {
        let data = {
          taiKhoan: taikhoan,
          matKhau: matkhau,
          email: email,
          soDt: soDienThoai,
          maNhom: "GP09",
          maLoaiNguoiDung: "QuanTri",
          hoTen: hoTen,
        };
        this.props.signInApi(data);
      }
    }
  };
  //===============================================
  getTokenLogin = () => {
    let { taikhoanC, matkhauC } = this.state;
    let data = {
      taiKhoan: taikhoanC,
      matKhau: matkhauC,
    };
    this.props.getTokenApiLogin1(data);
  };
  //===============================================
  handleUpdateUserPass = () => {
    let { matkhauN, emailN, soDtN, hoTenN, nguoiDungN } = this.state;
    let { tokenLogin } = this.props;
    if (tokenLogin.taiKhoan === undefined) {
    } else {
      let token1 = tokenLogin.accessToken;
      let data = {
        taiKhoan: tokenLogin.taiKhoan,
        matKhau: matkhauN,
        email: emailN.toLocaleLowerCase(),
        soDt: soDtN,
        maNhom: "GP09",
        maLoaiNguoiDung: nguoiDungN,
        hoTen: hoTenN,
      };
      console.log("data:", data);
      console.log("token:", token1);
      this.props.update_user_password1(data, token1);
    }
  };
  //===============================================
  render() {
    let { formload, taikhoan, matkhau, soDienThoai, email, hoTen } = this.state;
    let { taikhoanErr, matkhauErr, soDienThoaiErr, emailErr, hoTenErr } =
      this.state;
    let { taikhoanC, matkhauC, matkhauN, emailN, soDtN, hoTenN, nguoiDungN } =
      this.state;
    //console.log(taikhoan, matkhau);
    //console.log(this.props.tokenLogin);
    return (
      <Fragment>
        <div className="login_page1">
          <div id="myVideo__login">
            <video autoPlay muted loop>
              <source
                src={
                  require(`../../../../access/images/video/login.mp4`).default
                }
                type="video/mp4"
              />
            </video>
          </div>
          <div className="login_page text-center">
            <div className="login_loadmore" id="login__header">
              <p
                className={this.ActiveClass("login_at1")}
                onClick={() => {
                  this.handleLoadForm("1");
                  this.setState({ classActive: "login_at1" });
                }}
                id="login_at1"
              >
                Đăng Nhập
              </p>
              <p
                className={this.ActiveClass("login_at2")}
                onClick={() => {
                  this.handleLoadForm("2");
                  this.setState({ classActive: "login_at2" });
                }}
                id="login_at2"
              >
                Đăng Kí
              </p>
              <p
                className={this.ActiveClass("login_at3")}
                onClick={() => {
                  this.handleLoadForm("3");
                  this.setState({ classActive: "login_at3" });
                }}
                id="login_at3"
              >
                Cập Nhật
              </p>
            </div>
            {/* ==================dang nhap======================= */}
            {formload === "1" && (
              <div className="login_content">
                <h2>Đăng Nhập</h2>
                <div className="input__dflex">
                  <p>Tài Khoản</p>
                  <div className="validate__input">
                    <input
                      type="text"
                      name="taikhoan"
                      value={taikhoan}
                      placeholder="tài khoản"
                      onChange={this.handleChange}
                    />
                    <span style={{ opacity: "0" }}>aaaa</span>
                  </div>
                </div>
                <div className="input__dflex">
                  <p>Mật Khẩu</p>
                  <div className="validate__input">
                    <input
                      type="password"
                      name="matkhau"
                      value={matkhau}
                      placeholder="mật khẩu"
                      onChange={this.handleChange}
                    />
                    <span style={{ opacity: "0" }}>aaaa</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    this.handeLogin();
                  }}
                >
                  Đăng Nhập
                </button>
              </div>
            )}
            {/* ==================dang nhap======================= */}
            {/* ==================dang ki========================= */}
            {formload === "2" && (
              <div className="login_content">
                <h2>Đăng Kí Tài Khoản</h2>
                <div className="input__dflex">
                  <p>Tài Khoản</p>
                  <div className="validate__input">
                    <input
                      type="text"
                      name="taikhoan"
                      value={taikhoan}
                      placeholder="tài khoản"
                      onChange={this.handleChange}
                      onKeyUp={() => {
                        this.validateField("taikhoan");
                      }}
                    />
                    {taikhoanErr === "" ? (
                      <span style={{ color: "#0f0" }}>
                        <i class="fa fa-check mr-2"></i> tài khoản hợp lệ
                      </span>
                    ) : (
                      <span style={{ color: "#f00" }}>
                        <i class="fa fa-exclamation mr-2"></i> {taikhoanErr}
                      </span>
                    )}
                  </div>
                </div>
                {/* --------- */}
                <div className="input__dflex">
                  <p>Mật Khẩu</p>
                  <div className="validate__input">
                    <input
                      type="password"
                      name="matkhau"
                      value={matkhau}
                      placeholder="mật khẩu"
                      onChange={this.handleChange}
                      onKeyUp={() => {
                        this.validateField("matkhau");
                      }}
                    />
                    {matkhauErr === "" ? (
                      <span style={{ color: "#0f0" }}>
                        <i class="fa fa-check mr-2"></i> mật khẩu hợp lệ
                      </span>
                    ) : (
                      <span style={{ color: "#f00" }}>
                        <i class="fa fa-exclamation mr-2"></i> {matkhauErr}
                      </span>
                    )}
                  </div>
                </div>
                {/* --------- */}
                <div className="input__dflex">
                  <p>Số Điện Thoại</p>
                  <div className="validate__input">
                    <input
                      type="text"
                      name="soDienThoai"
                      value={soDienThoai}
                      placeholder="số điện thoại"
                      onChange={this.handleChange}
                      onKeyUp={() => {
                        this.validateField("soDienThoai");
                      }}
                    />
                    {soDienThoaiErr === "" ? (
                      <span style={{ color: "#0f0" }}>
                        <i class="fa fa-check mr-2"></i> số điện thoại hợp lệ
                      </span>
                    ) : (
                      <span style={{ color: "#f00" }}>
                        <i class="fa fa-exclamation mr-2"></i> {soDienThoaiErr}
                      </span>
                    )}
                  </div>
                </div>
                {/* --------- */}
                <div className="input__dflex">
                  <p>Email</p>
                  <div className="validate__input">
                    <input
                      type="text"
                      name="email"
                      value={email}
                      placeholder="email"
                      onChange={this.handleChange}
                      onKeyUp={() => {
                        this.validateField("email");
                      }}
                    />
                    {emailErr === "" ? (
                      <span style={{ color: "#0f0" }}>
                        <i class="fa fa-check mr-2"></i> Email thoại hợp lệ
                      </span>
                    ) : (
                      <span style={{ color: "#f00" }}>
                        <i class="fa fa-exclamation mr-2"></i> {emailErr}
                      </span>
                    )}
                  </div>
                </div>
                {/* --------- */}
                <div className="input__dflex">
                  <p>Họ Tên</p>
                  <div className="validate__input">
                    <input
                      type="text"
                      name="hoTen"
                      value={hoTen}
                      placeholder="họ và tên"
                      onChange={this.handleChange}
                      onKeyUp={() => {
                        this.validateField("hoTen");
                      }}
                    />
                    {hoTenErr === "" ? (
                      <span style={{ color: "#0f0" }}>
                        <i class="fa fa-check mr-2"></i> họ tên hợp lệ
                      </span>
                    ) : (
                      <span style={{ color: "#f00" }}>
                        <i class="fa fa-exclamation mr-2"></i> {hoTenErr}
                      </span>
                    )}
                  </div>
                </div>
                {/* --------- */}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    this.handleSignIn();
                  }}
                >
                  Đăng Kí
                </button>
              </div>
            )}
            {/* ==================dang ki========================= */}
            {/* ==================cập nhât======================== */}
            {formload === "3" && (
              <div className="login_content login__update">
                <div className="login__update1">
                  <div>
                    <span>Tài Khoản Cũ</span>
                    <input
                      type="text"
                      name="taikhoanC"
                      placeholder="Tài Khoản Cũ"
                      onChange={this.handleChange}
                      value={taikhoanC}
                    />
                  </div>
                  <div>
                    <span>Mật Khẩu Cũ</span>
                    <input
                      type="text"
                      name="matkhauC"
                      placeholder="Mật Khẩu Cũ"
                      onChange={this.handleChange}
                      value={matkhauC}
                    />
                  </div>
                  <div className="login__update1-btn">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => {
                        this.getTokenLogin();
                      }}
                    >
                      Lấy Mã Code
                    </button>
                  </div>
                  <div className="login__update1-code">
                    mã code:{" "}
                    {this.props.tokenLogin.accessToken === undefined ? (
                      <span></span>
                    ) : (
                      <span>
                        {this.props.tokenLogin?.accessToken.slice(0, 8)}
                      </span>
                    )}
                  </div>
                </div>
                {this.props.tokenLogin.accessToken === undefined ? (
                  <span></span>
                ) : (
                  <Fragment>
                    <div className="login__update2">
                      <div>
                        <span>Mật Khẩu Mới</span>
                        <input
                          type="text"
                          name="matkhauN"
                          placeholder="Mật Khẩu Mới..."
                          onChange={this.handleChange}
                          value={matkhauN}
                        />
                      </div>
                      <div>
                        <span>Email Mới</span>
                        <input
                          type="text"
                          name="emailN"
                          placeholder="Email Mới"
                          onChange={this.handleChange}
                          value={emailN}
                        />
                      </div>
                      <div>
                        <span>Số Điện Thoại Mới</span>
                        <input
                          type="text"
                          name="soDtN"
                          placeholder="số điện thoại Mới"
                          onChange={this.handleChange}
                          value={soDtN}
                        />
                      </div>
                      <div>
                        <span>Họ Tên Mới</span>
                        <input
                          type="text"
                          name="hoTenN"
                          placeholder="Họ Tên Mới"
                          onChange={this.handleChange}
                          value={hoTenN}
                        />
                      </div>
                    </div>
                    <div className="login__update2-txt1">
                      <select
                        name="nguoiDungN"
                        className="form-control"
                        required="required"
                        onChange={this.handleChange}
                        value={nguoiDungN}
                      >
                        <option value="KhachHang">Khách Hàng</option>
                        <option value="QuanTri">Quản Trị</option>
                      </select>
                    </div>
                    <div className="login__update2-txt1">
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => {
                          this.handleUpdateUserPass();
                        }}
                      >
                        Cập Nhật
                      </button>
                    </div>
                  </Fragment>
                )}
              </div>
            )}
            {/* ==================cập nhât======================== */}
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tokenLogin: state.loginToken,
  };
};
const mapDisPathToProps = (dispath, props) => {
  return {
    LoginApi: (data, history) => {
      dispath(action.loginApi(data, history));
    },
    signInApi: (data) => {
      dispath(action.signInApi(data));
    },
    getTokenApiLogin1: (data) => {
      dispath(action.getTokenApiLogin(data));
    },
    update_user_password1: (data, token1) => {
      dispath(action.update_user_password(data, token1));
    },
  };
};

export default connect(mapStateToProps, mapDisPathToProps)(withRouter(Login));
