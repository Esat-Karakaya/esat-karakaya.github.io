import Nav from "./nav/nav";
import Content from "./content/content";
import { useState } from "react";

const App=()=> {
    const[page,swicthPage]=useState("About");
    return(
        <>
            <Nav page={page} swicthPage={swicthPage}/>
            <Content/>
        </>
    )
}

export default App;