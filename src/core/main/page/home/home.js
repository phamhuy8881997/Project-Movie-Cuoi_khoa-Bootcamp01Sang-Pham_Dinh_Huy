import React, { Component, Fragment } from "react";
import Application from "../../components/application/application";
import Banner from "../../components/banner/banner";
import Carousel from "../../components/carousel/carousel";
import Navbar from "../../components/navbar/navbar";
import News from "../../components/news/news";
import Theater from "../../components/theater/theater";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Carousel />
        <Navbar />
        <Banner />
        <Theater />
        <News />
        <Application />
      </Fragment>
    );
  }
}

export default Home;
