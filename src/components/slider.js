  import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../image/putput1.png";
import Slide2 from "../image/putput2.png";
import Slide3 from "../image/putput3.png";
import Slide4 from "../image/putput4.png";
import Slide5 from "../image/putput5.jpg";
import { Typography,Box,Card } from "@material-ui/core";



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
                    <img src={Slide1} style={{ height: 500, width: "100%" }} />
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
                    <img src={Slide2} style={{ height: 500, width: "100%" }} />
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
                    <img src={Slide3} style={{ height: 500, width: "100%" }} />
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
                    <img src={Slide4} style={{ height: 500, width: "100%" }} />
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
                    <img src={Slide5} style={{ height: 500, width: "100%" }} />
                    </div>
                </div>
                </Slider>
            </div>

                <Card style={{backgroundColor:'whitesmoke',height:280}}>
                    <Typography style={{color:'orange'}} variant='h4'>
                        Welcome To Construction Manager
                    </Typography>
                    <Typography style={{marginTop:0, padding:80}}>
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