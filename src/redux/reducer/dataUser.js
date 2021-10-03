import * as typess from "../constant/index";
let initial = {};
const dataUser = (state = initial, action) => {
  let { type } = action;
  switch (type) {
    case typess.GET_USER:
      let { payload } = action;
      state = { ...payload };
      return { ...state };
    default:
      return { ...state };
  }
};
export default dataUser;
