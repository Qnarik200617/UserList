



function Button({title,clickMy,bakroundColor}){
    return(
        <div>
            <button onClick={clickMy} style={{backgroundColor:`${bakroundColor}`}}>{title}</button>
        </div>
    )
}
export default Button