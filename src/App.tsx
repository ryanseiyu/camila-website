import React from "react";
import logo from "./logo.svg";
import mockup1 from "./assets/images/mockup (1).png";
import mockup2 from "./assets/images/mockup (2).png";
import mockup3 from "./assets/images/mockup (3).png";
import mockup4 from "./assets/images/mockup (4).png";
import mockup5 from "./assets/images/mockup (5).png";
import mockup6 from "./assets/images/mockup (6).png";
import mockup7 from "./assets/images/mockup (7).png";
import logo1 from "./assets/images/logo (1).png";
import logo2 from "./assets/images/logo (2).png";
import logo3 from "./assets/images/logo (3).png";
import logo4 from "./assets/images/logo (4).png";
import logo5 from "./assets/images/logo (5).png";
import logo6 from "./assets/images/logo (6).png";
import logo7 from "./assets/images/logo (7).png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-child">
        <header className="App-iti">
          <div className="imageContainer">
            <img src={mockup1} className="App-logo" alt="logo" />
          </div>
          <img src={logo1} alt="" />
          <p>Project period: 9 months</p>
        </header>
      </div>

      <div className="App-child">
        <header className="App-neo">
          <div className="imageContainer">
            <img src={mockup2} className="App-logo" alt="logo" />
          </div>
          <img src={logo2} alt="" />
          <p>Project period: 8 months</p>
        </header>
      </div>

      <div className="App-child">
        <header className="App-capital">
          <div className="imageContainer">
            <img src={mockup3} className="App-logo" alt="logo" />
          </div>
          <img src={logo3} alt="" />
          <p>Project period: 12 months</p>
        </header>
      </div>

      <div className="App-child">
        <header className="App-preglife">
          <div className="imageContainer">
            <img src={mockup4} className="App-logo" alt="logo" />
          </div>
          <img src={logo4} alt="" />
          <p>Project period: 2 months</p>
        </header>
      </div>

      <div className="App-child">
        <header className="App-matressfinder">
          <div className="imageContainer">
            <img src={mockup5} className="App-logo" alt="logo" />
          </div>
          <img src={logo5} alt="" />
          <p>Project period: 4 months</p>
        </header>
      </div>

      <div className="App-child">
        <header className="App-cvc">
          <div className="imageContainer">
            <img src={mockup6} className="App-logo" alt="logo" />
          </div>
          <img src={logo6} alt="" />
          <p>Project period: 2 weeks</p>
        </header>
      </div>

      <div className="App-child">
        <header className="App-pravaler">
          <div className="imageContainer">
            <img src={mockup7} className="App-logo" alt="logo" />
          </div>
          <img src={logo7} alt="" />
          <p>Project period: 6 months</p>
        </header>
      </div>
    </div>
  );
}

export default App;
