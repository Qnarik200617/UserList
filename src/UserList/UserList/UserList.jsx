import { useReducer, useState } from "react";
import { useEffect } from "react";
import Footer from "../../Footer/Footer";
import Headers from "../../headers/Headers";
import"./UserList.css";

function reduser(state,action){
    if (action.type==="add") {
        return[
          
                ...state,
                {
                  id:Math.random(),
                  name:action.paylaad.name,
                  LastName:action.paylaad.lastname,
                  age:action.paylaad.age,
                  email:action.paylaad.email,
                  city:action.paylaad.city,
                },
         

        ]
    }

}


function UserList(){
    const [modal,setModal]=useState(true)
    const [name,setName]=useState("")
    const [LastName,setLastName]=useState("")
    const [age,setAge]=useState("")
    const [email,setEmail]=useState("")
    const [city,setCity]=useState("")
    const [user,dispatch]=useReducer(reduser,[
      
            {  
                id:1, 
                name:"Aram",
                lastname:"Gevorgyan",
                age:25,
                email:"AramGevorgyan@mail.ru",
                city:"Gyumri"
            },
            {
                id:2,
                name:"Maikl",
                lastname:"Jekson",
                age:34,
                email:"MaiklJekson@mail.ru",
                city:"Franc"
            },
            {
                id:3,
                name:"jon",
                lastname:"Smit",
                age:23,
                email:"JonSmit@mail.ru",
                city:"Tokyo"
            },
            {
                id:4,
                name:"Gevorg",
                lastname:"Eranosyan",
                age:32,
                email:"GevorgEranosyan@mail.ru",
                city:"Erevan"
            },
            
    ])
// const[user,setUser]=userState([])
//    function api(){

//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(json =>setUser(json))
//     }
 
// useEffect(async()=>{
//   api()
// },[])
// console.log(user[1],"user");
function click(){
    dispatch({
        type:"add",
        paylaad:{
          id:Math.random(),
          name:`${name}`,
          LastName:`${LastName}`,
          age:`${age}`,
          email:`${email}`,
          city:`${city}`,
        },
    }
    )
    setModal(!modal)
}

    return(
        <div className="contact-userList">
            <Headers></Headers>
        <div className="conteiner-userlist-centre">
            <div className="conteiner-userlist-min-width">
        <div className="conteiner">
            <div className="max-width">
           {user.map((item)=>
            <div className="conteiner-userList" key={item.id}>
                <div className="conteiner-userList-LastName">
               <p> {item.name}</p>
               <p>{item.lastname}</p>
               </div>
              <div className="conteiner-userList-data">
               <p>{item.email}</p>
               <p>{item.age}</p>
               <p>{item.city}</p> 
               </div>
            </div>
            
           )}
</div>
     <div >
        <button className="button500"
        onClick={()=>{
            setModal(!modal)
        }}>adduser</button>
        </div>      
        
        </div>
        <div className="userlist-center">

        {modal ? null:<div className="contact-userList-modal">
            <div className="contact-userList-modal-card">
                <div className="input100">
                    
                    <div>
                        <input placeholder="name" onChange={(e)=>setName(e.target.value)}></input>
                        
                    </div>
                    <div>
                        <input placeholder="LastName" onChange={(e)=>setLastName(e.target.value)}></input>
                        
                    </div>
                    <div>
                        <input placeholder="age" onChange={(e)=>setAge(e.target.value)}></input>
                      
                    </div>
                    <div>
                        <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}></input>
                     
                    </div>
                    <div>
                        <input placeholder="city" onChange={(e)=>setCity(e.target.value)}></input>
                       
                    </div>
                    <div>
                        <button onClick={click}>AddUser
                        </button>
                    </div>

                </div>
            </div>
                

        </div>}
        </div>
        </div>
        </div>
        <Footer></Footer>
        </div>
        
    )
}
export default UserList;