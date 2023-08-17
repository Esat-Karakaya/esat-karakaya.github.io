import "./navbutton.css";
const Navbutton=({children, pageinfo, clickHandler})=>{
    return(
        <button onClick={()=>{clickHandler(children)}} id={pageinfo===children ? "place":""} className={"link"}>
            {children}
        </button>
    )
}

export default Navbutton;