import { combineReducers } from "redux";
import movie from "./movieReducer";
import listChair from "./listChair";
import loginToken from "./auth";
import dataUser from "./dataUser";
import theater from "./theater";
import adminAllUser from "./adminAllUsers";
import theaterNavbar from "./getTimeNavbar";
const MyReducer = combineReducers({
  movie: movie,
  listChair: listChair,
  loginToken: loginToken,
  dataUser: dataUser,
  theater: theater,
  adminAllUser: adminAllUser,
  theaterNavbar: theaterNavbar,
});
export default MyReducer;
