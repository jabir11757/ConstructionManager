  import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../image/putput1.png";
import Slider2 from "../image/putput2.png";
import Slider3 from "../image/putput3.png";
import Slider4 from "../image/putput4.png";
import Slider5 from "../image/putput5.jpg";
import { Typography,Box,Card } from "@material-ui/core";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

export default class MySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
        <Box>
            <div
                id="marginTop"
                style={{ width: "100%", height: 600, overflow: "hidden" }}
            >
                <Slider {...settings}>
                <div>
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                    >
                    <img src={Slider1} style={{ height: 500, width: "100%" }} />
                    </div>
                </div>
                <div>
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                    >
                    <img src={Slider2} style={{ height: 500, width: "100%" }} />
                    </div>
                </div>
                <div>
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                    >
                    <img src={Slider3} style={{ height: 500, width: "100%" }} />
                    </div>
                </div>
                <div>
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                    >
                    <img src={Slider4} style={{ height: 500, width: "100%" }} />
                    </div>
                </div>
                <div>
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                    >
                    <img src={Slider5} style={{ height: 500, width: "100%" }} />
                    </div>
                </div>
                </Slider>
            </div>

                <Card data-aos="zoom-out" style={{backgroundColor:'whitesmoke',height:280}}>
                    <Typography style={{color:"black",padding:20}} variant='h3'>
                        Welcome To Construction Manager
                    </Typography>
                    <Typography variant="body1" style={{padding:40}}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Typography>
                </Card>
        
        </Box>
    );
  }
}