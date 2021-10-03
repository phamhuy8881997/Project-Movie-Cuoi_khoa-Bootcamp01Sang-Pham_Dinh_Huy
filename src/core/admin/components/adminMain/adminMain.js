import React, { Component } from "react";
import "./adminMain.scss";
import { Fragment } from "react";

import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import Loading from "../../../main/components/loading/loading";
import CartItem from "../cartItem/cartItem";

class AdminMain extends Component {
  componentDidMount() {
    this.props.getListMovie();
  }
  renderCartALL = () => {
    let { listMovie } = this.props;
    let resule = "";
    resule = listMovie?.map((item, i) => {
      return <CartItem key={`sdwwq${i}`} item={item} />;
    });
    return resule;
  };
  render() {
    //console.log(this.props.listMovie);
    return (
      <Fragment>
        <section className="admin__movieALL">
          <div className="admin__movieALL-title">
            <h1>Danh Sách Tất Cả Phim</h1>
          </div>
          <div>
            {this.props.listMovie.length === 0 ? (
              <Loading />
            ) : (
              <div className="admin__movieALL-body">{this.renderCartALL()}</div>
            )}
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.movie.movieList,
  };
};
const mapDisPathToProps = (dispath, props) => {
  return {
    getListMovie: () => {
      dispath(action.getMovieApi());
    },
  };
};

export default connect(mapStateToProps, mapDisPathToProps)(AdminMain);
