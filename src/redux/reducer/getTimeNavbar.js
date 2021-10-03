import * as typess from "../constant/index";
let initial = {};

const theaterNavbar = (state = initial, action) => {
  let { type, payload } = action;
  switch (type) {
    case typess.GET_THEATER_TIME:
      state = { ...payload };
      //console.log(state);
      return { ...state };
    default:
      return { ...state };
  }
};

export default theaterNavbar;
