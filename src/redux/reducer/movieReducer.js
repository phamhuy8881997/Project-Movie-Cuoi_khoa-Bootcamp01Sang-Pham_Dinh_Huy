import * as typess from "../constant/index";
let initial = {
  movieList: [],
  movieDetail: {},
};
const movie = (state = initial, action) => {
  let { type, payload } = action;
  switch (type) {
    case typess.GET_MOVIE:
      state.movieList = [...payload];
      return { ...state };
    case typess.GET_MOVIE_DETAIL:
      state.movieDetail = { ...payload };
      return { ...state };
    default:
      return { ...state };
  }
};
export default movie;
