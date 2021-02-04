import { Grid, Typography,Box,Card, Button } from '@material-ui/core';
import { grey } from "@material-ui/core/colors";
import React from 'react';
import {FeatureData} from './data'





// console.log(FeatureData)



const Feature = () => {
    return(
        <Box>
            <Box>
                <Typography style={{color:'orange'}} variant='h4'>Features</Typography>
            </Box>
            <Grid container display="flex">
                {FeatureData.map((item,index)=>{


return (
    <Grid item xs={3} key={index} style={{ padding: 10 }}>
      <Card id="features" 
        style={{
          marginTop: 10,
          borderRadius: 40,
          height: 250,
          width: "100%",
          backgroundColor: grey[200],
          
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <img
            src={item.image}
            style={{
            //   backgroundColor: "red",
              borderRadius: 10,
              margin: 10,
              width: 280,
              height: 190,
              marginTop:20
            }}
          ></img>
        </Box>
        <Typography
          variant="body1"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop:3,
            color:'orangered'
            
          }}
        >
        <Button style={{marginTop:-10}}>  {item.title}</Button>
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