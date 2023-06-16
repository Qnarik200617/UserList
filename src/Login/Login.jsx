import { useState } from "react";
import UserList from "../UserList/UserList/UserList";
import"./Login.css"
import Home from "../Home/Home";
import { Link } from "react-router-dom";
import Registr from "../Registr/Registr";





function Login(){
    
    const [login,setLogin]=useState("")
    const[password,setPassword]=useState("")
    const[booleanTrue,setBooleanTrue]=useState(true)
    const [registrState,setRegistrState]=useState(true)
    const [globalState,setGlobalState]=useState(true)
    const [passwordLogin,setpasswordLogin]=useState([
      {
        login:"Erevan",
        password:"2023",
        email:"MaiklJekson@mail.ru"
      },
      {
        login:"Gyumri",
        password:"2023",
        email:"MaiklJekson@mail.ru"
      },

    ])



    function clickme(){
      passwordLogin.map((item)=>{
        if(login===item.login && password===item.password){
          setBooleanTrue(false)

        }
            
        }
      )
    }
    function click2(){
      setRegistrState(!registrState)
      setGlobalState(!globalState)
    }

    return(
        <>
      
        {globalState?
    booleanTrue? 
      <div  className="login-container">
        <div>
            <div className="login-conteiner2">
            <div>
                <input onChange={(event)=>{setLogin(event.target.value)}}></input>
                </div>
            <div>
                <input type="password"onChange={(event)=>{setPassword(event.target.value)}}></input>
                </div>
                <div className="login-conteiner3">
                <button onClick={clickme}>Login</button>
                <button onClick={click2}>Regist</button>
                </div>
        </div>
      </div>
      </div>:

      <Home/>
      :<Registr passwordLogin={passwordLogin}
       setpasswordLogin={setpasswordLogin} 
      setBooleanTrue={setBooleanTrue}
      globalState={globalState}
      setGlobalState={setGlobalState}
      booleanTrue={booleanTrue}

/>}

      </>
    )
}
export default Login;