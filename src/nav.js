import "./navstyle.css";
import Navbutton from "./navbutton";
import { useState } from "react";
import Hambutton from "./hambutton";
const Nav=()=> {
    //Creating states
    const[page,swicthPage]=useState("Home");
    const[smallNavVis,newsmalldis]=useState(false);

    //If hamButton gets clicked this gets triggered
    const hamClicked=()=>{
        newsmalldis(true);
    }

    //When navButton gets clicked this gets triggered
    const whenclicked=(goto)=>{
        swicthPage(`${goto}`);
    }
    
    return(
        <>
            <h1 loadheader="yes">
                {page}
                <Hambutton clickHandler={hamClicked}/>
            </h1>
            <nav className={smallNavVis?"navVis":"navInvis"}>
                <button id="button-x" ></button>
                <Navbutton clickHandler={whenclicked} pageinfo={page} space={true}>Home</Navbutton>
                <Navbutton clickHandler={whenclicked} pageinfo={page}>Basics</Navbutton>	
                <Navbutton clickHandler={whenclicked} pageinfo={page}>Wars</Navbutton>
                <Navbutton clickHandler={whenclicked} pageinfo={page}>Invasives</Navbutton>
                <button id="end">Creators
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