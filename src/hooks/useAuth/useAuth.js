import { useContext } from "react";
import { AuthContext } from "./authProvider";
import request from "../../utils/request";

const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  // can't export dispatch, need to export functions
  // that use dispatch

  const login = async data => {
    const { email, password } = data;

    try {
      const response = await request({
        url: "http://localhost:3009/user/sign_in",
        method: "post",
        data: {
          email: email,
          password: password
        }
      });

      // store token in session
      sessionStorage.setItem("token", response.token);

      dispatch({
        type: "login",
        payload: {
          data: response.data,
          token: response.token,
          loggedIn: true
        }
      });
    } catch (error) {
      dispatch({
        type: "error",
        payload: {
          error: error
        }
      });
    }
  };

  const logout = () => {
    dispatch({
      type: "logout"
    });
  };

  // export them here, and state is the value of the reducer.
  return {
    login,
    logout,
    token: state.token,
    loggedIn: state.loggedIn,
    authError: state.error,
    user: state.user
  };
};

export default useAuth;
