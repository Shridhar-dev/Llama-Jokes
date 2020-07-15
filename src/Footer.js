import React from 'react';
import './header.css';

class Footer extends React.Component{
    constructor(){
        super()
        this.state={
        
        }
       
    }

    render(){
        return(
            <div>
            
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,0L30,53.3C60,107,120,213,180,234.7C240,256,300,192,360,170.7C420,149,480,171,540,154.7C600,139,660,85,720,101.3C780,117,840,203,900,213.3C960,224,1020,160,1080,154.7C1140,149,1200,203,1260,208C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                <div class="align-items-flex-end justify-content-center d-none d-xl-block d-md-block container-fluid py-5" style={{backgroundColor:"#273036",overflow:"hidden"}}>
                   <div class="">
                       <p class="footer-text">Copyright © Shridhar Kamat 2020</p>
                   </div>
                </div>
                
                <div class="justify-content-center d-block d-xl-none d-md-none  container-fluid pt-5 footer-text pb-3" style={{backgroundColor:"#273036",overflow:"hidden"}}>
                    Copyright © Shridhar Kamat 2020
                </div>
                
            </div>
        )

    }

}
export default Footer;

