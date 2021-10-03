import * as typess from "../constant/index";
let itinial = {};
const listChair = (state = itinial, action) => {
  let { type } = action;
  switch (type) {
    case typess.GET_LIST_CHAIR:
      let { listChair } = action;
      state = { ...listChair };
      return { ...state };
    case typess.CHOICE_CHAIR:
      let state1 = { ...state };
      let maghe = action.payload;
      let index = state1.danhSachGhe.findIndex((item) => item.maGhe === maghe);
      if (index !== 0) {
        if (state1.danhSachGhe[index].dangChon) {
          state1.danhSachGhe.splice(index, 1, {
            ...state1.danhSachGhe[index],
            dangChon: !state1.danhSachGhe[index].dangChon,
          });
        } else {
          state1.danhSachGhe.splice(index, 1, {
            ...state1.danhSachGhe[index],
            dangChon: true,
          });
        }
        state = { ...state1 };
      }
      return { ...state };
    default:
      return { ...state };
  }
};
export default listChair;
