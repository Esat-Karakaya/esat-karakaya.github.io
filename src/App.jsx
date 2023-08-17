import Nav from "./nav/nav";
import PageContainer from "./pageContainer/pageContainer";
import { useState } from "react";

const App=()=> {
    const[page,swicthPage]=useState(0);
    return(
        <>
            <Nav page={page} swicthPage={swicthPage}/>
            <PageContainer page={page}/>
        </>
    )
}

export default App;