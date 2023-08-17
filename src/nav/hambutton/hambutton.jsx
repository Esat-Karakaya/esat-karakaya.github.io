import "./hambutton.css";
const Hambutton =({clickHandler})=>{
    return(
        <button onClick={clickHandler} id="menu" >
            <span id="line"></span>
        </button>
    )
}
export default Hambutton;