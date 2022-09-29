import React from "react";
import Card from "../Component/Card";
import Header from "../Component/Header";

const Home = () => {
  return (
    <div>
      <div className="container-fluid header">
        <Header />
      </div>
      <div className="content">
        <Card />
      </div>
    </div>
  );
};

export default Home;
