import React from 'react';
import ad from "./brawwrr.wav"
import './header.css';
let query="%20";

let audio = new Audio(ad)
class Input extends React.Component{
    constructor(){
        super()
        this.state={
            jokes:"",
            baseString:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleString=this.handleString.bind(this);

    }

    async handleChange(){
        await console.log(audio.play())
        query=this.state.baseString;
        fetch(`https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,racist,sexist&type=single&contains=${query}`)
            .then(response=>{
                if(response.ok){
                    return response.json();
                }
                throw new Error("Llama couldn't digest your feed.He is posh you know😎");
            
            },networkError=>console.log(networkError.message))
            .then(jsonResponse=>{
                console.log('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,racist,sexist&type=single&contains='+ query)
                console.log(this.state.baseString)
                console.log(jsonResponse)
                this.setState({
                     jokes:jsonResponse,
                     baseString:""
                 } )
            })
           
            
    }
    handleString(e){
        console.log(e.target.name)
        console.log(this.state.baseString)
        if(e.target.name === "inputbox"){
        this.setState({
            baseString:e.target.value
        })
    }
    }

    render(){
        let con_text= this.state.jokes.message === 'No matching joke found' ? "Llama couldn't digest your feed.He is posh you know😎":this.state.jokes.joke;
        return(
            <div class="py-5">
                <h1 class="py-5">🌾🌿🥦Feed🥦🌿🌾</h1>
                <div class="d-inline py-5">
                     <input placeholder="Feed me!"  onChange={this.handleString}  name="inputbox"/>
                </div>   
               <span class="btn" onClick={this.handleChange}>🌿</span>
               
                <div class="container pt-2 joke-text">
                    {con_text}
                </div>
            </div>
        )

    }

}
export default Input;