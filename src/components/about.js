import React from 'react';
import { Grid, Typography,Box,Card, Paper } from '@material-ui/core';
import Task from '../image/task.png'
import CardContent from '@material-ui/core/CardContent';
// import Forbit from '../image/forbit.jpg'





const About = () => {
    return ( 
//    <Box display="flex" justifyContent="center">

//        <Box display="flex" flexDirection="column" flexGrow="1">
//             <h1>sdafdsfsaf</h1>
//             <h1>sdafdsfsaf</h1>
//             <h1>sdafdsfsaf</h1>
//        </Box>

//        <Box display="flex" flexGrow="1">
//        <h1>Jabir</h1>
//        </Box>
//    </Box>

        <Box id="about" display='flex' style={{width:100}}>

            <Box display="flex" flexDirection="column" flexGrow='1'>
                        <Card style={{backgroundColor:'whitesmoke',borderRadius: 40,height:280, width:400}}>
                            <CardContent style={{marginTop:50}}>
                        
                                <Typography style={{marginBottom:30,color:"black"}}variant='h2'>Forbit Limited</Typography>
                                <Typography variant="h5">Shah-Ali Bag, Mirpur-1</Typography>
                                <Typography variant="h5">Dhaka-1216</Typography>

                            </CardContent>
                        </Card>

                <Card style={{marginTop:30, borderRadius: 40, height:200,width:400}}>
                    <CardContent  style={{backgroundColor:'whitesmoke'}}>
                       
                        <Card  style={{marginBottom:40, backgroundColor:"grey",width:363}}>
                        <Typography style={{color:"white"}}variant="h3">Contact Us</Typography>
                        </Card>

                       
                            <Typography variant="h5">Contact:01710400547</Typography>
                            <Typography variant="h5">Mail:forbitbd@gmail.com</Typography>
                        
                    </CardContent>
                </Card>

            </Box>


            
              


               {/* <Box>
               <Grid container display="flex" flexDirection="column" flexGrow='1' style={{width:"100%"}}>
                        <Grid xs={4}>
                            <Box display="flex" flexDirection="column"  justifyContent="center">


                                <Typography variant='h4'>About Us</Typography>

                                <Box display="flex" style={{width:"100%"}} > 
                                   <Card  >
                                       
                                            <img src={Task}/>
                                            <Typography>Jabir</Typography>
                                      
                                    </Card>
                                   <Card >
                                       
                                            <img src={Task}/>
                                            <Typography>Jabir</Typography>
                                       
                                    </Card>

                                    <Card >
                                        
                                            <img src={Task}/>
                                            <Typography>Jabir</Typography>
                                       
                                    </Card>

                                </Box>
                            </Box>
                        </Grid>

                  </Grid>

               </Box> */}

           

            
        </Box>
       
     );
}
 
export default About;