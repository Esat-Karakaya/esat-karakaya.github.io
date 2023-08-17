import "./navbutton.css";
const Navbutton=({children, page, clickHandler, id})=>{
    const onClick=()=>{
        clickHandler(id)
    }
    return(
        <button onClick={onClick} id={page==id ? "place":""} className={"link"}>
            {children}
        </button>
    )
}

export default Navbutton;