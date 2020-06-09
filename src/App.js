import React, { useEffect, useState } from "react";

import "./assets/styles/style.css";
import axios from "axios";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import User_register from "./components/User_register";
import Home from "./components/Home";
import School from "./components/School";
import Job_search from "./components/Job_search";

function App() {
  useEffect(() => {
    axios.get(`/api`).then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <div className="main-back-ground">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/dancer" component={User_register} />
            <Route path="/school" component={School} />
            <Route path="/Job" component={Job_search} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
