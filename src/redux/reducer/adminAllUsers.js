import * as typess from "../constant/index";
let initial = [];
const adminAllUser = (state = initial, action) => {
  let { type } = action;
  switch (type) {
    case typess.USER_DATA:
      let { payload } = action;
      state = [...payload];
      return [...state];
    default:
      return [...state];
  }
};
export default adminAllUser;
