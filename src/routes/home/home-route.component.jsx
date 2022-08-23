import React from "react";
import "./home-route.style.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-route-container">
      <h1>QUICKFRUIT</h1>
      <p>Your favorite organic food delivered in 20 minutes</p>
      <div className="quickfruit-landing-image">
        {" "}
        <Button
          buttonType="yellow"
          onClick={() => {
            navigate("/shop");
          }}
        >
          DISCOVER OUR PRODUCTS
        </Button>
      </div>
    </div>
  );
};

export default Home;
