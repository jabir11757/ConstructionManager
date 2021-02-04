import React from "react";
// import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import image from "../image/logo.png"
import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import Grid from "@material-ui/core/Grid";
import { Link, animateScroll as scroll } from "react-scroll";

// function ElevationScroll(props) {
//   const { children, window } = props;
 
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
  
//   window: PropTypes.func,
// };

const Navbar = () => {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      {/* <ElevationScroll {...props}> */}
        <AppBar
          style={{
            background: "white",
            boxShadow: "initial",
          }}
        >
          <Toolbar>
            <img src={image} alt="logo" style={{ height: "80px" }} />

            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Button  style={{color:'orange',marginRight:70}}>
                <Link
                  style={{ activeClass: "1px solid black" }}
                  activeClass="active"
                  to="marginTop"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </Button>
              <Button  style={{color:'orange',marginRight:70}}>
                <Link
                  style={{ activeClass: "1px solid black" }}
                  activeClass="active"
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Feature
                </Link>
              </Button>

              <Button  style={{color:'orange',marginRight:70}}>
                {" "}
                <Link
                  activeClass="active"
                  to="screenshot"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  ScreenShot
                </Link>
              </Button>

              <Button  style={{color:'orange',marginRight:70}}>
                {" "}
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About Us
                </Link>
              </Button>
              <Button  style={{color:'orange',marginRight:70}}>
                {" "}
                <Link
                  activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Download App
                </Link>
              </Button>
              
              <Button  style={{color:'orange',marginRight:70}}> Login</Button>
            </Grid>
          </Toolbar>
        </AppBar>
      {/* </ElevationScroll> */}
      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;