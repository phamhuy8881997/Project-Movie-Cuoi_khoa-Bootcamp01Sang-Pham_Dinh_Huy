import React, { Component, Fragment } from "react";
import Header from "./components/header/header";
import Foodter from "./components/foodter/foodter";
import Menu from "./components/menu/menu";

class TemplateMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }
  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }
  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
      document.getElementById("header__menu").style.top = "0px";
    } else {
      this.setState({
        is_visible: false,
      });
      let temp = document.getElementById("header__menu");
      if (temp) {
        temp.style.top = "40px";
      }
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    let { Component } = this.props;
    const { is_visible } = this.state;
    return (
      <Fragment>
        <header>
          <Header />
          <Menu />
        </header>
        <main>
          <Component />
        </main>
        <footer>
          <Foodter />
        </footer>
        <div className="scroll-to-top">
          {is_visible && (
            <div
              className="scroll-to-top__content"
              onClick={() => this.scrollToTop()}
            >
              <i className="fa fa-arrow-alt-circle-up"></i>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default TemplateMain;
