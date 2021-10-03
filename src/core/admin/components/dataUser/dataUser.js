import React, { Component, Fragment } from "react";
import "./dataUser.scss";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router";
class DataUser extends Component {
  componentDidMount() {
    this.props.dataUsers();
  }
  renderUsers = () => {
    let { adminAllUser } = this.props;
    let resule = "";
    resule = adminAllUser?.map((user, i) => {
      return (
        <tr className="admin__users--item" key={`fsngng4${i}`}>
          <td>{i + 1}</td>
          <td>
            <p>{user.hoTen} </p>
          </td>
          <td>
            <p className="admin__users--color1">{user.taiKhoan} </p>
          </td>
          <td>
            <p className="admin__users--color1">{user.matKhau} </p>
          </td>
          <td>
            <p>{user.email}</p>
          </td>
          <td>
            <p>{user.soDt}</p>
          </td>
          <td>
            <p>{user.maLoaiNguoiDung}</p>
          </td>
        </tr>
      );
    });
    return resule;
  };
  render() {
    console.log(this.props.adminAllUser);
    return (
      <Fragment>
        <section className="admin__users">
          <div className="admin__users--tittle">
            <h1>Danh Sách Tài Khoản</h1>
          </div>
          <div className="admin__users--body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ Tên</th>
                  <th>Tài Khoản</th>
                  <th>Mật Khẩu</th>
                  <th>Email</th>
                  <th>Số Điện Thoại</th>
                  <th>phân loại</th>
                </tr>
              </thead>
              <tbody>{this.renderUsers()}</tbody>
            </table>
          </div>
          <div className="admin__users--foodter"></div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adminAllUser: state.adminAllUser,
  };
};
const mapDisPathToProps = (dispath, props) => {
  return {
    dataUsers: () => {
      dispath(action.get_data_user_api());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDisPathToProps
)(withRouter(DataUser));
