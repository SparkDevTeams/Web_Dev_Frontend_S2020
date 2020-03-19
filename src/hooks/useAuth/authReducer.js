import produce from "immer";

export const initialState = {
  user: {
    _id: "",
    email: "",
    role: [],
    name: "",
    createdAt: "",
    updatedAt: ""
  },
  token: "",
  loggedIn: false,
  error: ""
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return produce(state, draft => {
        draft.user = { ...action.payload.data };
        draft.loggedIn = true;
        draft.token = action.payload.token;
      });
    case "logout":
      return produce(state, draft => {
        draft.user = initialState.user;
        draft.loggedIn = false;
        draft.token = "";
      });
    case "error":
      return produce(state, draft => {
        draft.error = action.payload.error;
      });
    default:
      return state;
  }
};
