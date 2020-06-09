import { createStore } from "redux";

const initialState = {
  err_msg: "sss",
};

const reduser = (store = initialState, action) => {
  switch (action.type) {
    case "not_found_user":
      return { ...store, err_msg: "invalid email or password" };
    default:
      return store;
  }
};

const store = createStore(reduser);

export default store;
