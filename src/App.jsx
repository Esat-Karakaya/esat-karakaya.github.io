import Nav from "./nav/nav";
import PageContainer from "./pageContainer/pageContainer";
import { useState } from "react";

const App=()=> {
    const[page,swicthPage]=useState("About");
    return(
        <>
            <Nav page={page} swicthPage={swicthPage}/>
            <PageContainer/>
        </>
    )
}

export default App;