import React from 'react';
import './header.css';

class Prefooter extends React.Component{
constructor(){
        super()
        this.state={
        
        }
       
    }

    render(){
        return(
            <div class="container">
                <div class="py-3">👇🏽 Share it with your friends 👇🏽</div>
               <div class="sharethis-inline-share-buttons"></div>
            </div>
        )

    }

}
export default Prefooter;