import "./dropdown.css";
import { modalAtom } from "../../jotai/atoms";
import { useAtom } from "jotai";

const Dropdown=()=>{
    const [visible, toggleModal]=useAtom(modalAtom)
    const whenClicked=()=>{
        console.log("clicked")
        toggleModal(true)
        console.log(visible)
    }
    return(
        <button id="end" onClick={whenClicked}>Contact</button>
    )
}
export default Dropdown;