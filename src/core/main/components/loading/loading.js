import React, { Component } from "react";
import "./loading.scss";
class Loading extends Component {
  render() {
    return (
      <div id="loading__component">
        <div className="loading__img">
          <img
            src={require(`../../../../access/images/image/logo1.png`).default}
            alt="..."
          />
        </div>
        <div className="loading__text text-center">
          {/* <h3>... Đang Tải Dữ Liệu ...</h3> */}
        </div>
        <div className="loading-1">
          <div className="loading">
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
            <span style={{ "--i": 4 }}></span>
            <span style={{ "--i": 5 }}></span>
            <span style={{ "--i": 6 }}></span>
            <span style={{ "--i": 7 }}></span>
            <span style={{ "--i": 8 }}></span>
            <span style={{ "--i": 9 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 20 }}></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
