import axios from "axios";
import * as config from "./config";

export default function callapi(endpoint, method = "GET", data) {
  return axios({
    method: method,
    url: `${config.api}${endpoint}`,
    data: data,
  }).catch((err) => {
    console.log(err);
  });
}
