import React from 'react';
import './navbar.css';

class Navbar extends React.Component{
    constructor(){
        super()
        this.state={
        
        }
       
    }

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg  bg-nav px-3 py-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Llama Jokes 🦙</a>
                    <span class="navbar-toggler-icon navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
        class="fas fa-bars fa-1x py-0 my-0"></i></span>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="https://twitter.com/shridhar_kdev">Dev</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="https://github.com/Shridhar-dev">GitHub</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
          </div> 
        )

    }

}
export default Navbar;
