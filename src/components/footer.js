import React from 'react';
import Button from '@material-ui/core/Button';
import { Avatar, Box} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import "./footer.css"
import image from "../image/icon.png"
import { grey } from '@material-ui/core/colors';




    const Footer = () => {

       

        return ( 

      <Box >
             
              <Box id="footer"  style={{marginTop:80}}>


                <Box display="flex" style={{height:300, marginTop:-100}}>
                        
                        <Box>
                                <Avatar  img src={image} 
                                style={{
                                backgroundColor: "white",
                                borderRadius: 120,
                                margin: 50,
                                width: 200,
                                height: 200,
                                marginLeft:150,
                               
                                
                                }} />
                        </Box>
                                                        
                        
                        <Box>
                                                                
                        <Typography variant="h2" style={{color:"orange",marginTop:100,marginLeft:-150}}>Construction Manager</Typography>

                                <Typography variant="h4" 
                                        style={{
                                                marginTop:70,
                                                marginLeft:-200,
                                                color:"black"
                                                }}
                                        >One Solution For Managing Multiple Construction Site
                                </Typography>
                        </Box>

                </Box>

               


               {/* <Typography variant="h4" style={{color:"orange"}}>AVAILABLE ON</Typography> */}

              
              <Button href="https://play.google.com/store/apps/details?id=com.forbitbd.constructionmanager" 
               style={{
                       height:40,
                       width:150,
                       color:grey[700],
                       }}
                       >Google Play

               </Button>

                </Box>
             
               <Box  className="footer" display="flex" style={{height:"200 ", width:"300"}}>
             
               
      
             </Box>
      </Box>
         );
    }
     
    export default Footer;
