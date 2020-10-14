import React from "react";

import "./scrollable.scss";
import SwiggyImg from "../../Assets/Carousel Images/slide-3.png";
import KapivaImg from "../../Assets/Highlight Images/Kapiva.png";
import KenImg from "../../Assets/Highlight Images/TheKen.png";
import AntidoteCoffee from "../../Assets/Highlight Images/AntidoteCoffee.png";
import BloomHotels from "../../Assets/Portfolio Images/Rectangle 37-2.png";

// TODO: Control this from JS.
// TODO: reduce code duplication
const Scrollable = () => (
  <div className="scrollable-container">
    <div className="marquee">
      <ul className="marquee-content">
        <li className="marquee-content-li">
          <div className="heading-h1">Swiggy</div>
          <img src={SwiggyImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">The Ken</div>
          <img src={KenImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">Kapiva</div>
          <img src={KapivaImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">Swiggy</div>
          <img src={SwiggyImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">The Ken</div>
          <img src={KenImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">Kapiva</div>
          <img src={KapivaImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">Swiggy</div>
          <img src={SwiggyImg} style={{ width: "190px", height: "100%" }} />
        </li>
      </ul>
    </div>
    <hr />
    <div className="marquee">
      <ul className="marquee-content-reverse">
        <li className="marquee-content-li">
          <div className="heading-h1">Antidote</div>
          <img
            src={AntidoteCoffee}
            style={{ width: "190px", height: "100%" }}
          />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">The Ken</div>
          <img src={KenImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">Kapiva</div>
          <img src={KapivaImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">Antidote</div>
          <img
            src={AntidoteCoffee}
            style={{ width: "190px", height: "100%" }}
          />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">The Ken</div>
          <img src={KenImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">Kapiva</div>
          <img src={KapivaImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">Antidote</div>
          <img
            src={AntidoteCoffee}
            style={{ width: "190px", height: "100%" }}
          />
        </li>
      </ul>
    </div>
    <hr />
    <div className="marquee">
      <ul className="marquee-content">
        <li className="marquee-content-li">
          <div className="heading-h1">Bloom</div>
          <img src={BloomHotels} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">The Ken</div>
          <img src={KenImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">Kapiva</div>
          <img src={KapivaImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">Bloom</div>
          <img src={BloomHotels} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">The Ken</div>
          <img src={KenImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">Kapiva</div>
          <img src={KapivaImg} style={{ width: "190px", height: "100%" }} />
        </li>
        <li className="marquee-content-li">
          <div className="heading-h1">Bloom</div>
          <img src={BloomHotels} style={{ width: "190px", height: "100%" }} />
        </li>
      </ul>
    </div>
  </div>
);

export { Scrollable };
