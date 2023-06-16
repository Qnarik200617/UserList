import Headers from "./headers/Headers.jsx"
import Login from "./Login/Login.jsx";
import Useffect from "./Useffect/Useffect.jsx";
import Button from "./Button/Button.jsx";
import './App.css';
import { useState } from "react";
import {Component5} from "./Usecontext/Usecontext"
import { Route } from "react-router-dom";
import RouteReact from "./RouterReact/RouterReact.jsx";


function App() {

const[clickMy,setClickMy]=useState(7777)

function click(){
  setClickMy(clickMy+1)
}
function click2(){
  setClickMy(clickMy-1)
}
  return (
    <div className="App">

      <RouteReact/>
     {/* <Useffect/>
   
     <Button title="onClick1" clickMy={click} bakroundColor="violet"/>
     <Button title="onClick2" clickMy={click2} bakroundColor="yellow"/>
    <div class="clickme">
     {clickMy}
     </div>
     <Component5/> */}
     
    
     

    </div>
  );
}

export default App;
