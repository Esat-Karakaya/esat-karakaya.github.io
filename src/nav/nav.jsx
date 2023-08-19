import "./navstyle.css";
import Navbutton from "./navbutton/navbutton";
import Hambutton from "./hambutton/hambutton";
import { useState } from "react";
import { useAtom } from "jotai";
import { pageAtom } from "../jotai/atoms";

const Nav=()=> {
    const [pageId]=useAtom(pageAtom);
    const[smallNavVis,newsmalldis]=useState(false);

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
                <button onClick={()=>{newsmalldis(false)}} id="button-x" ></button>
                {buttonValues.map((value,i)=> <Navbutton key={value} id={i} >{value}</Navbutton>)}
                <button id="end">Contact
                    <div>
                        <div className="dropterms">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quibusdam.</div>
                    </div>
                </button>
            </nav>
            <span id={smallNavVis?"navFocus":"navFocusNone"} className="select"></span>
        </>
    )
}

export default Nav;