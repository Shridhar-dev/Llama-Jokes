import React from 'react';
import './header.css';

class Header extends React.Component{
    constructor(){
        super()
        this.state={
        
        }
       
    }

    render(){
        return(
            <div>
           <div class="container-fluid head-box">
               <div class="row py-xl-5 py-md-5 py-0 pb-5">
                   <div class="col head-text py-2 display-1">
                        <div class="display-1 pt-5">Llama's the Answer 🦙</div>
                        <div class="display-5 py-1">Feed the llama and get your answer</div>

                   </div>
               </div>
           </div>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L20,101.3C40,139,80,213,120,256C160,299,200,309,240,304C280,299,320,277,360,234.7C400,192,440,128,480,117.3C520,107,560,149,600,154.7C640,160,680,128,720,106.7C760,85,800,75,840,106.7C880,139,920,213,960,245.3C1000,277,1040,267,1080,229.3C1120,192,1160,128,1200,133.3C1240,139,1280,213,1320,208C1360,203,1400,117,1420,74.7L1440,32L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
            </div>
        )

    }

}
export default Header;

