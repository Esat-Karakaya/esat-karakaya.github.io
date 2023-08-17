import "./navbutton.css";
const Navbutton=({children, pageinfo, clickHandler, id})=>{
    const onClick=()=>{
        document.getElementById("page"+id).scrollIntoView({behavior:"smooth"})
        clickHandler(children)
    }
    return(
        <button onClick={onClick} id={pageinfo===children ? "place":""} className={"link"}>
            {children}
        </button>
    )
}

export default Navbutton;