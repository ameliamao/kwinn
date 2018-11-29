import React from "react";
import ReactDOM from "react-dom";
import MainDashboard from "../src/hoc/MainDashboard/MainDashboard";

const Index = () => {
  return <div><MainDashboard/></div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
