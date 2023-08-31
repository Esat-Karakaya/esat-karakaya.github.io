import "./navstyle.css";
import Navbutton from "../navbutton/navbutton";
import Hambutton from "../hambutton/hambutton";
import { useState } from "react";
import { useAtom } from "jotai";
import { modalAtom } from "../../jotai/atoms";

const Nav=()=> {
    const [, toggleModal]=useAtom(modalAtom);
    const[smallNavVis,newsmalldis]=useState(false);

    const showModal=()=>{
        toggleModal(true)
    }

    const hamClicked=()=>{
        document.querySelector("nav").style.display="block"
        setTimeout(()=>{
            newsmalldis(true);
        },0)
    }

    const hideNav=()=>{
        newsmalldis(false)
        setTimeout(()=>{
            document.querySelector("nav").style.display="none"
        },200)
    }
    
    const buttonValues = ["About", "Front-End", "Back-End", "Education"]
    return(
        <>
            <Hambutton clickHandler={hamClicked}/>
            <nav className={smallNavVis?"navVis":""}>
                <button onClick={hideNav} id="nav-x" className="button-x" ></button>
                {buttonValues.map((value,i)=> <Navbutton key={value} id={i} >{value}</Navbutton>)}
                <button id="end" onClick={showModal}>Contact</button>
            </nav>
        </>
    )
}

export default Nav;