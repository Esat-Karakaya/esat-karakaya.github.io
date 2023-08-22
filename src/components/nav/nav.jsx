import "./navstyle.css";
import Navbutton from "../navbutton/navbutton";
import Hambutton from "../hambutton/hambutton";
import { useState } from "react";
import { useAtom } from "jotai";
import { pageAtom, modalAtom } from "../../jotai/atoms";

const Nav=()=> {
    const [pageId]=useAtom(pageAtom);
    const [, toggleModal]=useAtom(modalAtom);
    const[smallNavVis,newsmalldis]=useState(false);

    const showModal=()=>{
        console.log("clicked")
        toggleModal(true)
    }

    const hamClicked=()=>{
        newsmalldis(true);
    }
    
    const buttonValues = ["About", "Front-End", "Back-End", "Education"]
    return(
        <>
            <h1>
                {buttonValues[pageId]}
                <Hambutton clickHandler={hamClicked}/>
            </h1>
            <nav className={smallNavVis?"navVis":"navInvis"}>
                <button onClick={()=>{newsmalldis(false)}} id="nav-x" className="button-x" ></button>
                
                {buttonValues.map((value,i)=> <Navbutton key={value} id={i} >{value}</Navbutton>)}
                <button id="end" onClick={showModal}>Contact</button>
            </nav>
            <span id={smallNavVis?"navFocus":"navFocusNone"} className="select"></span>
        </>
    )
}

export default Nav;