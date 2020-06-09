import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const Home = () => {
  return (
    <>
      <div className="home--container">
        <div className="home--item">
          <Link style={{ textDecoration: "none" }} to="/dancer">
            <Button
              style={{ minHeight: 200, minWidth: 400, fontSize: 30 }}
              variant="contained"
              color="primary"
            >
              ダンサーの方はこちらへ
            </Button>
          </Link>
        </div>
        <div className="home--item">
          <Link style={{ textDecoration: "none" }} to="/school">
            <Button
              style={{ minHeight: 200, minWidth: 400, fontSize: 31 }}
              variant="contained"
              color="primary"
            >
              お教室の経営者の方はこちらへ
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
