import { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"





function Usref(){
    const [count,setCount]=useState(0)
    const [useRefcount,setuseRefcount]=useState(0)
    const ref=useRef(0)
    useEffect(()=>{
        ref.current=ref.current
    })
    return(
        <div>
            <button onClick={()=>{setuseRefcount(ref.current++)}}>UsrefClick{useRefcount}</button>
            <button onClick={()=>{setCount()}}>setClick{useRefcount}</button>

        </div>
    )
}
export default Usref