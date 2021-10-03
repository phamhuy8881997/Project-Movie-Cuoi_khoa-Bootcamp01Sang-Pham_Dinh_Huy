import React, { Component, Fragment } from "react";
import "./modal.scss";

class Modal1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { show, close, myIfram } = this.props;
    return (
      <Fragment>
        {show ? (
          <div className="pop-up__modal">
            <div className="modal__content">
              <div className="modal__header">
                <i className="fa fa-times" onClick={close}></i>
              </div>
              <div className="modal__body">
                <iframe
                  width="100%"
                  height="100%"
                  src={myIfram}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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

export default Modal1;
