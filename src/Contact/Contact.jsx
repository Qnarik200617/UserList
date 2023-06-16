import Footer from "../Footer/Footer"
import Headers from "../headers/Headers"
import "./Contact.css"
import mask from  "../assets/img/mask.jpg"


function Contact(){
    return(
        <div>
        
           <Headers></Headers>
           <div className="conteiner-mask">
           <div className="conteiner-ilon">
           <div className="img300">
           <img className="img200" src={mask} />
           </div>
           <div className="conteiner-h2">
            <h2>Ilon Mask</h2>

           

           </div>
           <div className="conteiner-p">
            <p>IlonMask1971@mail.ru</p>
            <p>1-800-613-8840</p>
            <p>USA/New York</p>
           </div>
           </div>
        </div>
            <Footer></Footer>
       
        </div>
    )
}
export default Contact
