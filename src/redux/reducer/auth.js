import * as typess from "../constant/index";
let initial = {};
const loginToken = (state = initial, action) => {
  let { type, payload } = action;
  switch (type) {
    case typess.GET_TOKEN_LOGIN:
      state = { ...payload };
      return { ...state };
    default:
      return { ...state };
  }
};
export default loginToken;
