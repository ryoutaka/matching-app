import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { getUser } from "../functions/index";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
  },
  hook: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}));

const User_register = () => {
  const err = useSelector((store) => store.err_msg);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  return (
    <>
      ログインしてください
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField ref={nameInput} id="standard-basic" label="Name" />
        </div>
        <div>
          <TextField ref={emailInput} id="standard-basic" label="emailInput" />
        </div>
        <div>
          <TextField ref={passwordInput} id="standard-basic" label="password" />
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            const user_name = nameInput.current.querySelector("input").value;
            const email = emailInput.current.querySelector("input").value;
            const password = passwordInput.current.querySelector("input").value;

            history.push("/job");
            if (getUser(user_name, email, password)) {
              history.push("/job");
            } else {
              dispatch({ type: "not_found_user" });
            }
            console.log("ii");
          }}
        >
          SEND
        </Button>

        <div className={classes.root}></div>
      </form>
    </>
  );
};

export default User_register;
