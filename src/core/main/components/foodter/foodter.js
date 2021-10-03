import React, { Component, Fragment } from "react";
import "./foodter.scss";
class Foodter extends Component {
  render() {
    return (
      <Fragment>
        <section className="foodter">
          <div className="overlay__svg">
            <svg width="100%" height="100%">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fc0" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#f0f" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0ff" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <path
                d="M 0 275 Q 0 225 25 175 Q 75 100 175 125 Q 75 150 75 200 Q 125 175 150 200 Q 75 225 100 275 Q 150 225 175 250 Q 125 275 150 300 C 175 325 175 325 175 375 Q 225 150 375 200 Q 250 225 325 250 Q 225 250 300 375 Q 300 300 350 275 Q 375 250 450 250 Q 350 275 375 325 Q 425 275 475 300 Q 425 325 425 375 Q 425 400 450 425 Q 475 325 575 325 Q 475 375 525 400 Q 550 350 600 375 Q 525 425 650 425 C 725 450 725 325 800 400 Q 725 425 800 450 L 0 450 L 0 275 "
                fill="url(#grad1)"
                stroke="#400"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="overlay__svg--mobile">
            <svg width="100%" height="100%">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fc0" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#f0f" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0ff" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <path
                d="M 0 275 Q 25 225 50 225 Q 75 200 100 200 L 150 200 Q 100 225 125 250 Q 75 275 125 300 Q 125 275 175 275 Q 125 325 150 350 C 125 400 175 350 175 400 Q 175 350 200 350 Q 225 325 250 325 Q 225 350 225 375 Q 225 425 250 425 Q 250 375 275 375 Q 300 350 325 350 Q 300 375 300 400 Q 300 425 325 425 Q 350 450 375 425 Q 400 400 425 425 L 425 450 L 0 450 L 0 275 "
                fill="url(#grad2)"
                stroke="#400"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="foodter__main">
            <div className="foodter__body">
              <div className="foodter__body--img">
                <img
                  src={
                    require(`../../../../access/images/image/logo1.png`).default
                  }
                  alt="..."
                />
                <span>
                  {" "}
                  Sản Phẩm Của Công Ty Cổ Phần Blue Star Digital Media{" "}
                </span>
              </div>
              <div className="foodter__body--text">
                <p>
                  Địa Chỉ: 112 Cao Thắng, Phường 4, Quận 3, Thành Phố Hồ Chí
                  Minh
                </p>
                <p>Người Chịu Trách Nhiệm: Ông Nguyễn Văn A</p>
                <p>Email: OceanDigital@gmail.com / Hotline: 1900 123 123</p>
              </div>
            </div>
            <div className="foodter__header">
              <div className="foodter__header--1">
                <iframe
                  title="google map"
                  width="100%"
                  height="100%"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.0493323401734!2d106.67804169672597!3d10.772201279959997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fca39e3b493%3A0x865af6a617c57d82!2sCyberSoft%20Academy!5e0!3m2!1svi!2s!4v1632635192210!5m2!1svi!2s"
                  allowFullScreen=""
                  loading="lazy"
                  id="iframe__googleMap"
                ></iframe>
              </div>
              <div className="foodter__header--2">
                <p>
                  <i className="fa fa-address-card"></i> Người Phụ Trách Nguyễn
                  Văn B
                </p>
                <p>
                  <i className="fa fa-phone-square"></i> 0909123123 / 0797222555
                </p>
                <p>
                  <span>
                    Hợp Tác Với Chúng Tôi:
                    <i
                      className="fab fa-youtube mx-4"
                      style={{ color: "#f00" }}
                    ></i>
                    <i
                      className="fab fa-facebook-square mr-4"
                      style={{ color: "rgb(0, 174, 255)" }}
                    ></i>
                    <i
                      className="fab fa-skype mr-4"
                      style={{ color: "rgb(0, 238, 255)" }}
                    ></i>
                    <i
                      className="fab fa-instagram"
                      style={{ color: "rgb(255, 196, 0)" }}
                    ></i>
                  </span>
                </p>
                <div>
                  <div className="input-group">
                    <span className="mr-4">Phản Hồi: </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="liên hệ với chúng tôi.."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        <i className="fa fa-paper-plane"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="foodter__foodter">
              <p>@ CoppyRight By Blue Star Digital 2021 </p>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Foodter;
