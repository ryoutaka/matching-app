import axios from "axios";
export const getUser = (user_name, email, password) => {
  axios
    .post("/userLogin", {
      user_name,
      email,
      password,
    })
    .then((res) => {
      console.log(res);
    });
};
