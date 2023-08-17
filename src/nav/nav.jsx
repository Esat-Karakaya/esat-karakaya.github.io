import "./navstyle.css";
import Navbutton from "./navbutton/navbutton";
import Hambutton from "./hambutton/hambutton";
import { useState } from "react";
const Nav=({page, swicthPage})=> {
    //Creating states
    const[smallNavVis,newsmalldis]=useState(false);

    //If hamButton gets clicked this gets triggered
    const hamClicked=()=>{
        newsmalldis(true);
    }

    //When navButton gets clicked this gets triggered
    const whenclicked=(goto)=>{
        swicthPage(`${goto}`);
    }
    const buttonValues = ["About", "Front-End", "Back-End", "Education"]
    return(
        <>
            <h1>
                {page}
                <Hambutton clickHandler={hamClicked}/>
            </h1>
            <nav className={smallNavVis?"navVis":"navInvis"}>
                <button onClick={()=>{newsmalldis(false)}} id="button-x" ></button>
                {buttonValues.map((value,i)=><Navbutton clickHandler={whenclicked} key={i} pageinfo={page}>{value}</Navbutton>)}
                <button id="end">Contact
                    <div>
                        <div className="dropterms">hello Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis nostrud exe</div>
                    </div>
                </button>
            </nav>
            <span id={smallNavVis?"navFocus":"navFocusNone"} className="select"></span>
        </>
    )
}

export default Nav;