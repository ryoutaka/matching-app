import axios from "axios";
import { useDispatch } from "react-redux";
//ssssss
export const getUser = (user_name, email, password) => {
  axios
    .post("/userLogin", {
      user_name,
      email,
      password,
    })
    .then((res) => {
      console.log(res.data.length);
      if (res.data.length) {
        // window.location = "/job";
        return true;
      } else {
        return false;
      }
    });
};
