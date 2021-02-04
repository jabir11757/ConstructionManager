import React, { Component, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide0 from "../image/s1.png";
import Slide1 from "../image/s2.png";
import Slide2 from "../image/s3.png";
import Slide3 from "../image/s4.png";
import Slide4 from "../image/s5.png";
import Slide5 from "../image/s6.png";
import Slide6 from "../image/s7.png";
import Slide7 from "../image/s8.png";

import { Typography, Fade } from "@material-ui/core";

const sliderImages = [
  Slide0,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,

];

const names = [
  "SignUp",
  "SignIn",
  "Assign Vehicle",
  "Expanded Vehicle list",
  "Map",
  "Map Expanded",
  "On-Off Status",
  "Distance Chart", 
];

const Screenshot = () => {
  const [name, setName] = useState(names[1]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3, 
    slidesToScroll: 1,
  };
  return (
    <div
      id="screenshot"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",

        overflow: "hidden",
      }}
    >
      <Typography variant="h4" style={{ padding: 10 ,color:'orange'}}>
        {" "}
        Screenshoot
      </Typography>

      <Typography variant="h6" style={{ padding: 10 }}>
        {name}
      </Typography>

      <div style={{ width: "70%" }}>
        <Slider
          afterChange={(index) =>
            setName((old) => names[(index + 1) % names.length])
          }
          {...settings}
        >
          {sliderImages.map((img, index) => (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={img} style={{ height: 400 ,width:300}} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Screenshot;