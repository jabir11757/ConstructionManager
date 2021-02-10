import React, { useState } from "react";
import { Typography} from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide0 from "../image/slides/s1.png";
import Slide1 from "../image/slides/s2.png";
import Slide2 from "../image/slides/s3.png";
import Slide3 from "../image/slides/s4.png";
import Slide4 from "../image/slides/s5.png";
import Slide5 from "../image/slides/s6.png";
import Slide6 from "../image/slides/s7.png";
import Slide7 from "../image/slides/s8.png";
import Slide8 from "../image/slides/s9.png";
import Slide9 from "../image/slides/s10.png";
import Slide10 from "../image/slides/s11.png";
import Slide11 from "../image/slides/s12.png";
import Slide12 from "../image/slides/s13.png";
import { grey } from "@material-ui/core/colors";


const sliderImages = [
  Slide0,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,

];

const names = [
  "Dashboard",
  "All Task",
  "Today's Task",
  "Running Task",
  "Completed Task",
  "Expired Task",
  "Accounts",
  "Transactions",
  "Suppliers",
  "Received",
  "Consumed",
  "Employees",
  "Workers",

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
      <Typography variant="h3" style={{ padding: 10 ,color:grey[900 ]}}>
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
                <img src={img} style={{ height: 420 ,width:230}} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Screenshot;