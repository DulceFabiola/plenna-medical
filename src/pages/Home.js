import React from "react";
import Article from "../components/Article";

const Home = () => {
  return (
    <div className="patients-container">
      <div>
        <div className="grid-container">
          <Article
            url={
              "https://www.isfpanama.com/wp-content/uploads/2021/04/4372551-removebg-preview.png"
            }
          />
          <Article
            url={
              "https://www.isfpanama.com/wp-content/uploads/2021/04/4372551-removebg-preview.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
