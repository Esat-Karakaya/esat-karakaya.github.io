const Navbutton=({children, space, pageinfo, clickHandler})=>{
    return(
        <button onClick={()=>{clickHandler(children)}} id={pageinfo===children ? "place":""} className={"link"+(space ?" space":"")}>
            {children}
        </button>
    )
}

export default Navbutton;