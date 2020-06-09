import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const Home = () => {
  return (
    <>
      <div>
        <Button variant="contained" color="primary" href="/dancer">
          ダンサーの方はこちらへ
          {/* <Link to="/dancer">danserの方はこちらへ</Link> */}
        </Button>
        <Button variant="contained" color="primary" href="/school">
          お教室経営者の方はこちらへ
          {/* <Link to="/school">お教室の経営者の方はこちらへ</Link> */}
        </Button>
      </div>
    </>
  );
};

export default Home;
