import { Grid, Typography,Box,Card, Button } from '@material-ui/core';
import React from 'react';
import {FeatureData} from './data'


import "aos/dist/aos.css";
import AOS from "aos";
import { grey } from '@material-ui/core/colors';





// console.log(FeatureData)

AOS.init();

const Feature = () => {
    return(
        <Box style={{backgroundColor:grey[400]}}>
            <Box  id="features">
                <Typography style={{color:grey[900],padding:20}} variant='h3'>Features</Typography>
            </Box>
            <Grid container display="flex">
                {FeatureData.map((item,index)=>{


return (
    <Grid item xs={3} key={index} style={{ padding: 25 }}>
      <Card  data-aos={item.animation} data-aos="zoom-out"
        style={{
          marginTop: 10,
          borderRadius: 10,
          height: 250,
          width: "100%",
          backgroundColor: grey[200],
          
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <img
            src={item.image}
            style={{
            //   backgroundColor: "red",\
            marginTop:-15,
              borderRadius: 10,
              padding:20,
              height: 200,
              width:200,
              
            }}
          ></img>
        </Box>
        <Typography
          variant="h5"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            
           
            
          }}
        >
        <Button style={{marginTop:-20,color:grey[900]}}>  {item.title}</Button>
        </Typography>
       
      </Card>
    </Grid>
  );

 
            })} 
            </Grid>
        </Box>
    )
}
 
export default Feature;
















{/* <Grid item xs={2} key={index} style={{ padding: 10 }}> */}