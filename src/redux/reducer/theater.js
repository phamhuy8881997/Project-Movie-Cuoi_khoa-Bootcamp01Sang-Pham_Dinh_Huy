import * as typess from "../constant/index";
let initial = {
  logoTheater: [],
  listTheater: [],
  infoTheater: [],
};

const theater = (state = initial, action) => {
  let { type, payload } = action;
  switch (type) {
    case typess.GET_THEATER:
      state.logoTheater = [...payload];
      //console.log(state);
      return { ...state };
    case typess.GET_THEATER_LIST:
      state.listTheater = [...payload];
      //console.log(state);
      return { ...state };
    case typess.GET_THEATER_INFO:
      state.infoTheater = [...payload];
      //console.log(state);
      return { ...state };
    default:
      return { ...state };
  }
};

export default theater;
