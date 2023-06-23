import "./navstyle.css";
import {Navbutton} from "./navbutton";
import { useState } from "react";
const Nav=()=> {
    //Creating states
    const[page,swicthPage]=useState("Home");
    const[navdisplay,newResponsiveNav]=useState("NavVisible");

    const whenclicked=(goto)=>{
        swicthPage(`${goto}`);
    }
    
    return(
        <>
            <h1 loadheader="yes">
                Home
                <button id="menu" >
                    <div id="line"></div>
                </button>
            </h1>
            <nav>
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
            <span id="open" className="select"></span>
        </>
    )
}

export {Nav};