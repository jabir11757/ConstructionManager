import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Box, Avatar} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Joss from '../image/Owao.jpg'






  

  

    
    

    const Footer = () => {

      
        return ( 

        
        <Card id="footer" style={{marginTop:80,backgroundColor:"whitesmoke"}}>
                                        
                {/* <Avatar  img src={Joss} style={{
                        backgroundColor: "red",
                        borderRadius: 120,
                        margin: 50,
                        width: 200,
                        height: 200,
                        
                        }} /> */}
               
                        
                        <Typography variant="h3" style={{color:"orange"}}>Construction Manager</Typography>

                        <Typography variant="h4" 
                                style={{
                                        marginBottom:70, 
                                        textDecorationStyle:"dashed"
                                        }}
                                >One Solution For Managing Multiple Construction Site
                        </Typography>


                        <Typography variant="h4" >AVAILABLE ON</Typography>

                        <Button style={{height:40,width:150,color:"orange"}}>Google Play</Button>
               </Card>
        


            
        //    <div>
             
        //        <img src={Joss} style={{width:"100%"}}/>
        //    </div>
         );
    }
     
    export default Footer;
