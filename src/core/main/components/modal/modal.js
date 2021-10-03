import React, { Component, Fragment } from "react";
import "./modal.scss";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { show, close, trailer } = this.props;
    return (
      <Fragment>
        {show ? (
          <div className="pop-up__modal">
            <div className="modal__content">
              <div className="modal__header">
                <i className="fa fa-times" onClick={close}></i>
              </div>
              <div className="modal__body">
                <video
                  controls
                  loop
                  poster={
                    require(`../../../../access/images/image/carousel${trailer}.jpg`)
                      .default
                  }
                >
                  <source
                    src={
                      require(`../../../../access/images/video/trailer${trailer}.mp4`)
                        .default
                    }
                  />
                </video>
              </div>
              <div className="modal__foodter">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={close}
                >
                  Quay Lại
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default Modal;
