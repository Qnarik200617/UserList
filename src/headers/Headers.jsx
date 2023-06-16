import { useState } from "react";
import Layout from "../Layout/Layout";
import"./Headers.css";

function Headers(){
    const[click,setClick]=useState("button")
    const[color,setColor]=useState("blue")

    function clickmy(){
        setClick("sexmir indz vra")
        setColor("red")
    }

    return(
        <headers className="headers">
            {/* <nav>
                <ul className="ul headers">
                    <li>home</li>
                    <li>about</li>
                    <li>user</li>
                </ul>
            </nav> */}
<Layout/>
        </headers>
    )
}
export default Headers;