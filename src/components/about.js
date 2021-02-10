import React from 'react';
import { Grid, Typography,Box,Card } from '@material-ui/core';
import Forbit from '../image/forbiticon.png'
import { AboutData } from './data';
import { blueGrey, grey } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar'
// import CSS from './about.css'


import "aos/dist/aos.css";
import AOS from "aos";



AOS.init();
const About = () => {
    return ( 


        <Box id="about" display='flex' style={{backgroundColor:blueGrey[100],padding:10}} >

            <Card display="flex" flexDirection="column" flexGrow='1'
                style={{
                    padding:5,
                    width:"30%",
                    borderRadius:20,
                    backgroundColor:grey[400],
                    // backgroundColor:'whitesmoke'
                    }}
                    >

                    <Card data-aos="fade-up-right" 
                            style={{
                                backgroundColor:'whitesmoke',
                                height:"60%",
                                width:"95%", 
                                borderRadius: 10,
                                marginTop:10,
                                marginLeft:12,
                                }}>

                        <img style={{height:320,marginTop:-30}} src={Forbit}/>
                        
                            <Typography style={{marginTop:-20,color:"black"}}variant='h3'>Forbit Limited</Typography>
                            <Typography variant="h5">Shah-Ali Bag, Mirpur-1</Typography>
                            <Typography variant="h5">Dhaka-1216</Typography>

                    </Card>

                    <Card  style={{marginTop:18, marginLeft:12, borderRadius: 20, height:"35%",width:"95%"}}>
                        
                        
                        <Card  style={{marginBottom:40, width:"100%",borderRadius: 20, backgroundColor:'grey'}}>
                        <Typography style={{color:"white"}}variant="h3">Contact Us</Typography>
                        </Card>

                    
                        <Typography variant="h5">Contact:01710400547</Typography>
                        <Typography variant="h5">Mail:forbitbd@gmail.com</Typography>  
                            
                    
                    </Card>

            </Card>






            <Card container display="flex" 
                style={{
                    width:"70%",
                    backgroundColor:'whitesmoke',
                    borderRadius: 20,
                    marginLeft:10,
                    }} 
                    >
                        <Card style={{width:"100%", height:80, backgroundColor:"grey"}}>

                            <Typography variant="h3" style={{color:"white",marginTop:10}}>About Us</Typography>

                        </Card>


                        <Grid container spacing={2} style={{padding:10,backgroundColor:grey[400]}}>
                            {AboutData.map((item,index)=><Grid item xs={4} >
                            <Card data-aos="fade-up-right"
                            style={{
                                backgroundColor:'whitesmoke',
                                borderRadius: 10,
                                height:250,
                                padding:20,
                                }}>

                            <Avatar  img src={item.image} style={{
                                backgroundColor: "red",
                                borderRadius: 120,
                                width: 150,
                                height: 150,
                                marginLeft:50,
                                marginBottom:20,
                               
                                }} />


                            <Typography style={{color:grey[900]}}variant='h5'>{item.name}</Typography>
                            <Typography variant="h8">{item.title}</Typography>
                            </Card>
                            </Grid>)}
                        </Grid>
                   

                
            </Card>

            

        </Box>



        





           
       

               


     );
}
 
export default About;