import "./navbutton.css";
import { useDispatch } from "react-redux";
import { pageActions } from "../../redux/store";

const Navbutton=({children, pageId, id})=>{
    const dispatch=useDispatch()
    const whenclicked=()=>{
        dispatch(pageActions.switchPage(id))
    }
    return(
        <button onClick={whenclicked} id={pageId==id ? "place":""} className={"link"}>
            {children}
        </button>
    )
}

export default Navbutton;