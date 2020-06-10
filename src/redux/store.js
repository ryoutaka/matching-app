import { createStore } from "redux";

const initialState = {
  register_msg: "Please Login",
  color_msg: "black",
};

const reduser = (store = initialState, action) => {
  switch (action.type) {
    case "not_found_user":
      return {
        ...store,
        register_msg: "invalid email or password",
        color_msg: "red",
      };
    default:
      return store;
  }
};

const store = createStore(reduser);

export default store;
