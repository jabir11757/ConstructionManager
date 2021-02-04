import React from 'react';
import MySlider from './slider';
import Screenshot from './screenshot';
import Feature from './features'
import Management from './management';
import About from './about';
import Footer from './footer';
import Navbar from './navbar';

const Main = () => {
    return ( 
        <div>
           
            <Navbar/>
            <MySlider/>
            <Feature/>
            <Screenshot/>
            <Management/>
            <About/>
            <Footer  />
        </div>
     );
}
 
export default Main;