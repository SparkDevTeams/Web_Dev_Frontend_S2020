import request from "../../utils/request";

export const createChallenge = () =>
  request({
    method: "post",
    url: "/"
  });
