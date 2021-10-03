import callapi from "../../api/axios";
import * as typess from "../constant/index";
import axios from "axios";
import { toast } from "react-toastify";

//=============================================================================
//================lấy danh sách movie============================================
//=============================================================================
export const getMovieApi = () => {
  return (dispath) => {
    callapi(`/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`, "GET", null).then(
      (res) => {
        dispath({
          type: typess.GET_MOVIE,
          payload: res.data,
        });
      }
    );
  };
};
//=============================================================================
//================lấy danh sách movie==========================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================lấy chi tiết phim===========================================
//=============================================================================
export const getMovieDetailApi = (id) => {
  return (dispath) => {
    callapi(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`, "GET", null).then(
      (res) => {
        dispath({
          type: typess.GET_MOVIE_DETAIL,
          payload: res.data,
        });
      }
    );
  };
};
//=============================================================================
//=================lấy chi tiết phim===========================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================lấy danh sách ghế===========================================
//=============================================================================
export const getListChairApi = (maPhim) => {
  return (dispath) => {
    callapi(
      `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maPhim}`,
      "GET",
      null
    ).then((res) => {
      dispath({
        type: typess.GET_LIST_CHAIR,
        listChair: res.data,
      });
    });
  };
};
//=============================================================================
//=================lấy danh sách ghế===========================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================đặt vé xem phim=============================================
//=============================================================================
export const bookingApi = (maLichChieu, danhSachVe, history) => {
  let user;
  if (localStorage.getItem("userLogin")) {
    user = JSON.parse(localStorage.getItem("userLogin"));
  }
  return (dispath) => {
    axios({
      method: "POST",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
      data: {
        maLichChieu,
        danhSachVe,
        taiKhoanNguoiDung: user.taiKhoan,
      },
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        dispath({
          type: typess.BOOKING,
          booking: res.data,
        });
        toast.success(`😀Đặt vé thành công Thành Công ! `, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        });
        setTimeout(() => history.push("/profile"), 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`⚠️ đăt vé thất bại ! `, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        });
      });
  };
};
//=============================================================================
//=================đặt vé xem phim=============================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================chọn ghế xem phim===========================================
//=============================================================================
export const bookingChair = (chair) => {
  return {
    type: typess.CHOICE_CHAIR,
    payload: chair,
  };
};
//=============================================================================
//=================chọn ghế xem phim===========================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================đăng nhập===================================================
//=============================================================================
export const loginApi = (userLogin, history) => {
  return (dispath) => {
    callapi(`/QuanLyNguoiDung/DangNhap`, "POST", userLogin)
      .then((res) => {
        dispath({
          type: typess.LOGIN,
          payload: res.data,
        });
        localStorage.setItem("userLogin", JSON.stringify(res.data));

        toast.success(`😀 Đăng Nhập Thành Công ! `, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        });
        toast.info(`😀 Xin Chào ${res.data.hoTen} !  `, {
          position: "top-center",
          autoClose: 8000,
          pauseOnHover: false,
        });
        setTimeout(() => history.goBack(), 2000);
        //clearTimeout(loginTo);
      })
      .catch((error) => {
        toast.error(`⚠️ tài khoản hoặc mật khẩu không Tồn Tại ! `, {
          position: "top-center",
          autoClose: 4000,
          pauseOnHover: false,
        });
      });
  };
};
//=============================================================================
//=================đăng nhập===================================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================đăng kí=====================================================
//=============================================================================
export const signInApi = (data) => {
  return (dispath) => {
    callapi("/QuanLyNguoiDung/DangKy", "POST", data)
      .then((res) => {
        toast.info(`😀 Đăng Kí Thành Công !  `, {
          position: "top-center",
          autoClose: 4000,
          pauseOnHover: false,
        });
        setTimeout(() => window.location.reload(), 4000);
      })
      .catch((err) => {
        toast.error(`⚠️ Đăng Kí Thất Bại !  `, {
          position: "top-center",
          autoClose: 4000,
          pauseOnHover: false,
        });
      });
  };
};
//=============================================================================
//=================đăng kí=====================================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================lấy thông tin user==========================================
//=============================================================================
export const get_user_api = (data) => {
  return (dispath) => {
    callapi(`/QuanLyNguoiDung/ThongTinTaiKhoan`, "POST", data).then((res) => {
      dispath({
        type: typess.GET_USER,
        payload: res.data,
      });
    });
  };
};
//=============================================================================
//=================lấy thông tin user==========================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================lấy danh sách rap ==========================================
//=============================================================================
export const get_theater_api = () => {
  return (dispath) => {
    callapi(`/QuanLyRap/LayThongTinHeThongRap`, "GET", null).then((res) => {
      dispath({
        type: typess.GET_THEATER,
        payload: res.data,
      });
      //console.log(res.data);
    });
  };
};
//=============================================================================
//=================lấy danh sách rap ==========================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================lấy danh sách cum rap ======================================
//=============================================================================
export const get_theater_list_api = (maHeThongRap) => {
  return (dispath) => {
    callapi(
      `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}
    `,
      "GET",
      null
    ).then((res) => {
      dispath({
        type: typess.GET_THEATER_LIST,
        payload: res.data,
      });
      //console.log(res.data);
    });
  };
};
//=============================================================================
//=================lấy danh sách cum rap ======================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================lấy thông tin suất chiếu ===================================
//=============================================================================
export const get_theater_info_api = (maHeThongRap) => {
  return (dispath) => {
    callapi(
      `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09
    `,
      "GET",
      null
    ).then((res) => {
      dispath({
        type: typess.GET_THEATER_INFO,
        payload: res.data,
      });
      //console.log(res.data);
    });
  };
};
//=============================================================================
//=================lấy thông tin suất chiếu ===================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================lấy thông tin lịch chiếu theo mã phim ======================
//=============================================================================
export const get_theater_time_api = (maPhim) => {
  return (dispath) => {
    if (maPhim === "") {
      console.log("ma phim khong hop le");
    } else {
      callapi(
        `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}
      `,
        "GET",
        null
      ).then((res) => {
        dispath({
          type: typess.GET_THEATER_TIME,
          payload: res.data,
        });
        //console.log(res.data);
      });
    }
  };
};
//=============================================================================
//=================lấy thông tin lịch chiếu theo mã phim ======================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================thêm phim mới lên API ======================================
//=============================================================================
export const push_movie_api = (data) => {
  return (dispath) => {
    callapi(`/QuanLyPhim/ThemPhimUploadHinh`, "POST", data)
      .then((res) => {
        dispath({
          type: typess.ADD_MOVIE,
          payload: res.data,
        });
        toast.success(`😀 thêm phim thành công ! `, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((res) => {
        toast.error(`⚠️ thêm phim thất bại ! `, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        });
      });
  };
};
//=============================================================================
//=================thêm phim mới lên API ======================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================cập nhật phim lên api ======================================
//=============================================================================
export const update_movie_api = (data) => {
  let user;
  if (localStorage.getItem("userLogin")) {
    user = JSON.parse(localStorage.getItem("userLogin"));
  }
  return (dispath) => {
    axios({
      method: "POST",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload`,
      data,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        toast.info(`😀 Cập Nhật phim thành công ! `, {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: false,
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        toast.error(`⚠️ Cập nhật phim thất bại ! `, {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: false,
        });
      });
  };
};
//=============================================================================
//=================cập nhật phim lên api ======================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================thêm lịch chiếu mới lên API ================================
//=============================================================================
export const push_movie_time_api = (data) => {
  let user;
  if (localStorage.getItem("userLogin")) {
    user = JSON.parse(localStorage.getItem("userLogin"));
  }
  return (dispath) => {
    axios({
      method: "POST",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu`,
      data,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        dispath({
          type: typess.ADD_TIME,
          payload: res.data,
        });
        toast.success(`😀 thêm lịch chiếu thành công Thành Công ! `, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        //setTimeout(() => history.push("/profile"), 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`⚠️ thêm lịch chiếu thất bại ! `, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        });
      });
  };
};
//=============================================================================
//=================thêm lịch chiếu mới lên API ================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//===================xóa phim API =============================================
//=============================================================================
export const delete_movie_api = (maPhim) => {
  let user;
  if (localStorage.getItem("userLogin")) {
    user = JSON.parse(localStorage.getItem("userLogin"));
  }
  return (dispath) => {
    axios({
      method: "DELETE",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?maPhim=${maPhim}`,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        toast.info(`😀  xóa phim thành công ! `, {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: false,
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        toast.error(`⚠️ xóa phim thất bại ! `, {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: false,
        });
      });
  };
};
//=============================================================================
//===================xóa phim API =============================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================lấy toàn bộ người dùng =====================================
//=============================================================================
export const get_data_user_api = () => {
  return (dispath) => {
    callapi(
      `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09`,
      "GET",
      null
    ).then((res) => {
      return dispath({
        type: typess.USER_DATA,
        payload: res.data,
      });
    });
  };
};
//=============================================================================
//=================lấy toàn bộ người dùng =====================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//=================lấy token câp nhật tài khoản================================
//=============================================================================
export const getTokenApiLogin = (userLogin) => {
  return (dispath) => {
    callapi(`/QuanLyNguoiDung/DangNhap`, "POST", userLogin)
      .then((res) => {
        dispath({
          type: typess.GET_TOKEN_LOGIN,
          payload: res.data,
        });
        //localStorage.setItem("userLoginToken", JSON.stringify(res.data));

        toast.success(`😀 Lấy Mã Code Thành Công ! `, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        });
      })
      .catch((error) => {
        toast.error(`⚠️ tài khoản hoặc mật khẩu không Tồn Tại ! `, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        });
      });
  };
};
//=============================================================================
//=================lấy token câp nhật tài khoản================================
//=============================================================================
//+++++++++++++++++++
//=============================================================================
//================= câp nhật tài khoản=========================================
//=============================================================================
export const update_user_password = (data, accessToken1) => {
  return (dispath) => {
    axios({
      method: "PUT",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      data,
      headers: {
        Authorization: `Bearer ${accessToken1}`,
      },
    })
      .then((res) => {
        toast.success(`😀 cập nhật thành công Thành Công ! `, {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: false,
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`⚠️ cập nhật thất bại ! `, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        });
      });
  };
};
//=============================================================================
//================= câp nhật tài khoản=========================================
//=============================================================================
