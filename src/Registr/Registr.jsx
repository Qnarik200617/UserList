import "./Registr.css";
import { useState } from "react";


function Registr({setpasswordLogin,passwordLogin,setBooleanTrue,globalState,setGlobalState,booleanTrue}){
    const [loginAdd,setLoginAdd]=useState("")
    const [passwordAdd,setPasswordAdd]=useState("")
    const [emailAdd,setEmailAdd]=useState("")
    function click(){
        setpasswordLogin([
            ...passwordLogin,
            
                {
                    loginAdd:loginAdd,
                    passwordAdd:passwordAdd,
                    emailAdd:emailAdd,
                  },
            
        ])
        setTimeout(()=>{
            setGlobalState(!globalState)
            setBooleanTrue(!booleanTrue)

        },1000)
        
    }
    return(
        <div className="conteiner-registr">
           <div className="registr-center">
           <div>
            <input onChange={(e)=>setLoginAdd(e.target.value)}placeholder="Login"></input>
           </div>
           <div>
           <input onChange={(e)=>setPasswordAdd(e.target.value)} placeholder="Password"></input>
           </div>
           <div>
           <input onChange={(e)=>setEmailAdd(e.target.value)} placeholder="Email"></input>
           </div>
           <div className="button2000">
            <button onClick={click}>
                Registr
            </button>
           </div>
           </div>
        </div>
        
    )

}
export default  Registr