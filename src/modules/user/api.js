import request from "../../utils/request";

export const register = (firstname, lastname, password, email) =>
  request({
    method: "post",
    url: "/user/sign_up",
    data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    }
  });
