import { Box, Grid, Typography,Card } from '@material-ui/core';
import { grey } from "@material-ui/core/colors";
import React, { Fragment } from "react";
import { ManagementData } from './data';


import "aos/dist/aos.css";
import AOS from "aos";


AOS.init();


const Management = ({  }) => {
    return(
      <Box>
        <Grid>
          {ManagementData.map((item,index)=>{


return ( 
  <Box
  id={item.title}
  data-aos={item.animation}
  display="flex"
  style={{
    padding: 10,
    color:'orange',
    // backgroundColor: index % 2 === 0 ? grey[50] : grey[300],
  }}
>
      <Box
        display="flex"
        flexGrow="1"
        style={{ maxWidth: "50%", minWidth: "50%" }}
        order={2}
        justifyContent="center"
        alignItems="center" 
      >
        <Card display="flex" style={{ width: "100%" }}>
          {" "}
          <img src={item.image} style={{ height: 300 }} />
        </Card>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        flexGrow="1"
        alignItems="center"
        justifyContent="center"
        style={{ padding: 10 }}
        order={index % 2 === 0 ? 3 : 1}
      >
       <Card style={{height:305}}>
       <Typography
          variant="h5"
          style={{ color:'orange' ,marginBottom:60}}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body1"
          style={{
            marginTop: 10,
            color: index % 2 === 0 ? grey[600] : grey[800],
          }}
        >
          {item.description}
        </Typography>
       </Card>
      </Box>
</Box>


);


          })}
        </Grid>
      </Box>
    )

};
     

 
export default Management;