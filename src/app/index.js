import React from "react"; 
import { render } from "react-dom"; 

import {Header} from "./components/Header"; 
import {Home} from "./components/Home"; 


class App extends React.Component { 
    onGreet() {
        alert("Hello!");
    }
    render(){ 
        return (
                <div className="container">
                 <Header homeLink="betrLearn"/>
                 <Home name={"Dhruv"} initialAge={19} greet={this.onGreet}/>
                </div>
       ); 
    } 
}

render(<App/>,window.document.getElementById("app"));