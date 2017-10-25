import React from "react"; 
import { render } from "react-dom"; 

import {Header} from "./components/Header"; 
import {Home} from "./components/Home"; 


class App extends React.Component { 
    
   constructor(){
    super();
    this.state = {
        homeLink:"betLearn"
     };
   }

    onGreet() {
        alert("Hello!");
    }

    onChangeLinkName(newName){
       this.setState({
        homeLink: newName
       });
    }

    render(){ 
        return (
                <div className="container">
                 <Header homeLink={this.state.homeLink}/>
                 <Home name={"Dhruv"} 
                 initialAge={19} 
                 greet={this.onGreet}
                 changeLink={this.onChangeLinkName.bind(this)}
                 />
                </div>
       ); 
    } 
}

render(<App/>,window.document.getElementById("app"));