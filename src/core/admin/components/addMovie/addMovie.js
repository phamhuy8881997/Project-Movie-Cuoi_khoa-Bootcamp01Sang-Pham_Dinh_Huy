import React, { Component, Fragment } from "react";
import "./addMovie.scss";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router";
import { toast } from "react-toastify";

const uploadImage =
  require("../../../../access/images/image/upload.png").default;
class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: 0,
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: "",
      moTa: "",
      maNhom: "GP09",
      ngayKhoiChieu: "",
      danhGia: 8,
      imageLoad: uploadImage,
    };
  }
  //==========================================
  handleChange = (e) => {
    if (e.target.name === "hinhAnh") {
      this.setState({
        hinhAnh: e.target.files[0],
      });
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          this.setState({ imageLoad: reader.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      //console.log("hinhAnh:", e.target.files[0]);
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  //==========================================
  handleAddMovie = () => {
    //var formData = new FormData();
    //formData.append("maPhim", this.state.maPHim);
    //let d = new Date();
    //console.log(d.toJSON());
    //let { imageLoad } = this.state;
    let { maPhim, tenPhim, biDanh, trailer, moTa, ngayKhoiChieu, hinhAnh } =
      this.state;

    let form_data = new FormData();
    for (var key in this.state) {
      if (key === "imageLoad") {
        console.log("no add keyfromdata");
      } else {
        form_data.append(key, this.state[key]);
        console.log(`${key}:`, form_data.get(key));
      }
    }
    if (
      maPhim === "" ||
      tenPhim === "" ||
      biDanh === "" ||
      trailer === "" ||
      moTa === "" ||
      ngayKhoiChieu === "" ||
      hinhAnh === ""
    ) {
      toast.error(`⚠️ Vui Lòng không Bỏ Trống Dữ Liệu ! `, {
        position: "top-center",
        autoClose: 3000,
        pauseOnHover: false,
      });
    } else {
      if (window.confirm("Bạn Muốn Thêm Phim ?")) {
        this.props.addMovie(form_data);
      }
    }
  };
  //==========================================
  handleUpdateMovie = () => {
    let { maPhim, tenPhim, biDanh, trailer, moTa, ngayKhoiChieu, hinhAnh } =
      this.state;

    let form_data = new FormData();
    for (var key in this.state) {
      if (key === "imageLoad") {
        console.log("no add keyfromdata");
      } else {
        form_data.append(key, this.state[key]);
        console.log(`${key}:`, form_data.get(key));
      }
    }
    if (
      maPhim === "" ||
      tenPhim === "" ||
      biDanh === "" ||
      trailer === "" ||
      moTa === "" ||
      ngayKhoiChieu === "" ||
      hinhAnh === ""
    ) {
      toast.error(`⚠️ Vui Lòng không Bỏ Trống Dữ Liệu ! `, {
        position: "top-center",
        autoClose: 3000,
        pauseOnHover: false,
      });
    } else {
      if (window.confirm("Bạn Muốn Cập Nhật Phim ?")) {
        this.props.updateMovie(form_data);
      }
    }
  };
  //==========================================
  // imageHandler = (e) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       this.setState({ hinhAnh: reader.result });
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };
  //==========================================
  //==========================================
  //==========================================
  render() {
    let { maPhim, tenPhim, biDanh, trailer, moTa, ngayKhoiChieu, imageLoad } =
      this.state;
    //console.log(maPhim, tenPhim, biDanh, hinhAnh, trailer, moTa, ngayKhoiChieu);
    return (
      <Fragment>
        <div className="add__movie">
          <section className="add__movie-left">
            <div className="add__movie-left-img">
              <img src={imageLoad} alt="..." />
            </div>
            <div className="add__movie-left-input">
              <label htmlFor="hinhAnh">
                <i className="fa fa-upload"></i>
                <span>Tải Ảnh Lên...</span>
              </label>
              <input
                type="file"
                name="hinhAnh"
                id="hinhAnh"
                accept="image/*"
                onChange={this.handleChange}
              />
            </div>
            <div className="add__movie-left-input">
              <p>Mô Tả Thông Tin Phim</p>
              <textarea
                type="text"
                name="moTa"
                value={moTa}
                id="moTa"
                rows="5"
                onChange={this.handleChange}
                placeholder="mô tả chi tiết thông tin phim..."
              />
            </div>
          </section>
          <section className="add__movie-right">
            <div className="add__movie-title">
              <h1>Thêm Phim Mới</h1>
            </div>
            <div className="add__movie-input">
              <div className="add__movie-input1">
                <p>Mã Phim</p>
                <input
                  type="number"
                  name="maPhim"
                  value={maPhim}
                  id="maPhim"
                  onChange={this.handleChange}
                  placeholder="mã Phim ... (vd: 3456)"
                />
              </div>
              <div className="add__movie-input1">
                <p>Tên Phim</p>
                <input
                  type="text"
                  name="tenPhim"
                  value={tenPhim}
                  id="tenPhim"
                  onChange={this.handleChange}
                  placeholder="tên phim... (vd: Siêu Anh Hùng 4)"
                />
              </div>
              <div className="add__movie-input1">
                <p>Bí Danh</p>
                <input
                  type="text"
                  name="biDanh"
                  value={biDanh}
                  id="biDanh"
                  onChange={this.handleChange}
                  placeholder="bí danh... (vd: sieu-anh-hung-4)"
                />
              </div>
              <div className="add__movie-input1">
                <p>Trailer</p>
                <input
                  type="text"
                  name="trailer"
                  value={trailer}
                  id="trailer"
                  onChange={this.handleChange}
                  placeholder="trailer phim ... "
                />
              </div>
              <div className="add__movie-input1">
                <p>ngày Khởi Chiếu</p>
                <input
                  type="text"
                  name="ngayKhoiChieu"
                  value={ngayKhoiChieu}
                  id="ngayKhoiChieu"
                  onChange={this.handleChange}
                  placeholder="dd-mm-yyyy (vd: 25-12-2021)"
                />
              </div>
            </div>
            <div className="add__movie-btn">
              <button
                className="btn btn-warning mx-3"
                onClick={() => {
                  this.handleAddMovie();
                }}
              >
                {" "}
                Thêm Phim Mới
              </button>
              <button
                className="btn btn-info mx-3"
                onClick={() => {
                  this.handleUpdateMovie();
                }}
              >
                {" "}
                Cập Nhật Phim
              </button>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDisPathToProps = (dispath, props) => {
  return {
    addMovie: (data) => {
      dispath(action.push_movie_api(data));
    },
    updateMovie: (data) => {
      dispath(action.update_movie_api(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDisPathToProps
)(withRouter(AddMovie));

//8419
//"https://www.youtube.com/embed/oVeaajIfghU"
//Một nàng tiên cá (Mermaid) phải lòng người chồng chưa cưới của Marina và nhằm mục đích để giữ anh ta đi từ Marina trong Vương Quốc Chết Chóc của mình dưới nước. Nàng tiên cá là một phụ nữ trẻ bị chết đuối vài thế kỷ trước. Marina chỉ có một tuần để vượt qua nỗi sợ của cô về nước tối, để duy trì con người trong cuộc chiến chết người với những con quái vật và cố gắng không biến thành một trong số chúng.

// 8495
// Avengers Infinity War
// avengers-infinity-war
// https://www.youtube.com/embed/6ZfuNTqbHE8
// Cái kết của phim đã thực sự thỏa mãn được người hâm mộ khi nó đáp ứng được tất cả những gì mà họ mong chờ. Toàn bộ những thắc mắc được dấy lên ngay từ khi trailer Avengers: Endgame ra mắt đều đã được giải quyết ổn thỏa, tạo bước đà để người xem thoải mái cảm nhận sự lắng đọng tại hồi kết của phim.
// 24-11-2021

// 8502
// https://www.youtube.com/embed/CgLOoD2nTyY
// Giam Cầm Quỷ Dữ
// giam-cam-quy-du
// Shut In là một phim tâm lý kinh dị thót tim kể về một nhà tâm lý học trẻ góa bụa. Cô sống biệt lập tại một vùng nông thôn ở New England – Mỹ. Gặp phải cơn bão mùa đông chết người, cô phải tìm cách giải cứu một bé trai trước khi cậu biến mất mãi mãi. Phim do Farren Blackburn làm đạo diễn, với sự tham gia của siêu sao Hollywood – Naomi Watts và tài năng nhí Jacob Tremblay của Room (2014), Before I Wake (2016).
// 25-11-2021

// 8527
// https://www.youtube.com/embed/SefkmMcA-0E
// Tru Tiên
// tru-tien
// Tru Tiên 2 - Thanh Vân Chí 2 (2016) là bộ phim truyền hình cổ trang tiên hiệp cải biên từ tiểu thuyết Tru Tiên của Tiêu Đỉnh. Bộ phim kể về thiếu niên Trương Tiểu Phàm ở thôn Thảo Miêu gia nhập Thanh Vân Môn, cùng với con gái của Quỷ Vương là Bích Dao, người bạn tốt là Lâm Kinh Vũ, Lục Tuyết Kỳ, Tăng Thư Thư cùng những thiếu niên khác giúp đỡ người lương thiện, trừ yêu diệt ác, cuối cùng làm thất bại âm mưu làm Thần Thú sống lại, điên đảo thanh vân của Quỷ Vương
// 12-01-2022

// 8528
// https://www.youtube.com/embed/6Vtf0MszgP8
// Transformers The Last
// transformers-the-last
// Robot Đại Chiến 5: Chiến Binh Cuối Cùng là phần tiếp theo về Robot biến hình ăn khách. "Chiến Binh Cuối Cùng" phá nát những huyền thoại cốt lõi của loạt phim Transformers, và tái định nghĩa thế nào là anh hùng. Con người và các Transformer đang có chiến tranh, Optimus Prime đã biến mất. Chìa khóa để cứu tương lai của chúng ta đang được chôn vùi trong những bí mật của quá khứ, trong lịch sử ẩn còn được giữ kín của các Transformer trên Trái Đất.
// 15-01-2022

// 8529
// https://www.youtube.com/embed/7IfO34zcwao
// Battle of Gods (2019)
// dragon-ball-super
// Bảy Viên Ngọc Rồng - Cuộc Chiến Giữa Các Vị Thần - Bản chính thức và tiếp theo 7 viên ngọc rồng sau 17 năm của tác giả Akira Toriyama. Bối cảnh phim diễn ra vài năm sau cuộc chiến đánh bại Ma Bư (Majin-Buu). Bills, vị thần hủy diệt duy trì trạng thái cân bằng cho vũ trụ đã thức dậy sau một giấc ngủ dài. Nghe tin đồn rằng có một Saiyan đã đánh bại Fide (Frieza), Bills lập tức đi tìm Goku. Sau một thời gian dài không có đối thủ mạnh, Goku bỏ qua lời khuyên của Thần Vũ Trụ (King Kai) và thách thức Bills trong một trận chiến. Tuy nhiên, Goku không đủ mạnh trước sức mạnh áp đảo của Bills và đã bị đánh bại. Bills bỏ đi sau khi thốt lên rằng, Có kẻ nào đó trên Trái Đất xứng đáng để tiêu diệt?. Các nhân vật chính phải cùng nhau luyện tập để chiến đấu trước khi bị tiêu diệt
// 18-01-2022

// 8530
// https://www.youtube.com/embed/bXwNQKK8nLk
// Đường Tới Ninja
// duong-toi-ninja
// Phim Naruto Trận Chiến Cuối Cùng bối cảnh của bộ phim là 2 năm sau Đại Chiến Thế Giới Shinobi lần thứ 4 kết thúc, mặt trăng bắt đầu xịch gần về phía Trái đất. Mặt trăng lúc này như một thiên thạch khổng lồ, nó có thể sẽ phá hủy tất cả mọi thứ, một đồng hồ đếm ngược đến ngày tận thế được thiết lập, Naruto phải đối phó với mối đe dọa này. Trong khi đó, Toneri Otsutsuki, một hậu duệ của Hamura Otsutsuki đã xuất hiện và bắt cóc Hanabi Hyuga – em gái của Hinata, sau khi thất bại trong việc bắt cóc Hinata.
// 12-02-2022

// 8531
// https://www.youtube.com/embed/n-7wMgFTc9E
// Người Nhện 2
// nguoi-nhen-2
// Người Nhện Siêu Đẳng 2, Siêu Nhện Tái Xuất: Sự Trỗi Dậy Của Người Điện 2014 hé lộ mối quan hệ giữa Richard Parker - bố của Peter và tập đoàn Oscorp cùng nghiên cứu bí mật mà bố cậu từng thực hiện cho Oscorp khiến gia đình cậu bị truy đuổi. Xem phim online này bạn sẽ thấy Harry Osborn - người bạn lâu năm của Peter quyết định theo đuổi tham vọng thay đổi thế giới, trở thành kẻ thù hùng mạnh nhất mà Người Nhện phải đương đầu
// 18-02-2022

// 8532
// https://www.youtube.com/embed/TSlDQk3Nee8
// Khương Tử Nha
// khuong-tu-nha
// Khương Tử Nha: Nhất Chiến Phong Thần kể về đệ tử Côn Luân Khương Tử Nha, dẫn đầu thần chúng diệt yêu hồ, lật đổ Thương vương tàn bạo, giành được thắng lợi trong cuộc đại chiến phong thần, chẳng mấy chốc sẽ được phong làm người đứng đầu thần chúng. Trong thời khắc đỉnh cao ấy, chỉ trong chớp mắt hắn lại bị giáng chức đuổi xuống trần gian, mất đi thần lực, bị người đời phỉ nhổ. Lấy mục tiêu trở về Côn Luân, Khương Tử Nha bắt đầu hành trình của mình. Trở lại phế tích chốn chiến trường năm xưa, hắn như tìm lại được chính mình, đồng thời phát hiện ra những bí ẩn giấu năm đó.
// 23-02-2022

// 8533
// https://www.youtube.com/embed/twtjj-tuwaY
// NOBITA CHIẾN TRANH VŨ TRỤ
// NOBITA-CHIẾN-TRANH-VŨ-TRỤ
// Phim Doraemon: Nobita Và Chuyến Thám Hiểm Nam Cực Kachi Kochi xoay quanh câu chuyện về chuyến thám hiểm Nam Cực của Nobita cùng nhóm bạn trẻ lớp 3E. Để tránh cái nóng oi bức của mùa hè, Nobita và những người bạn đã tìm đến một tảng băng trôi lớn và tự xây cho mình một công viên bằng băng từ những bảo bối của Doraemon.
// 27-02-2022

// 8534
// https://www.youtube.com/embed/FnCdOQsX5kc
// Chú Hề Ma Quái
// chu-he-ma-quai
// Lấy bối cảnh tại một thị trấn giả tưởng nằm tại Derry, Maine, Hoa Kỳ, nơi mà có 7 đứa trẻ hay bị ức hiếp tự lập thành một nhóm gọi là The Loser Club. Những đứa trẻ này bị một con quỷ dữ đội lốt chú hề mang tên Pennywise ám ảnh
// 15-03-2022
