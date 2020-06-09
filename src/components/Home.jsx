import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const Home = () => {
  return (
    <>
      <div>
        <Link to="/dancer">
          <Button variant="contained" color="primary">
            ダンサーの方はこちらへ
          </Button>
        </Link>

        <Link to="/school">
          <Button variant="contained" color="primary">
            お教室の経営者の方はこちらへ
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
