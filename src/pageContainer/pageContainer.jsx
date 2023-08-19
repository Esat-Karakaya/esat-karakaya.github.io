import BackEnd from "./pages/Back-End";
import FrontEnd from "./pages/Front-End";
import About from "./pages/About";
import Education from "./pages/Education";
import "./pageStyle.css";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { pageAtom } from "../jotai/atoms";

const PageContainer=()=>{
    const [pageId]=useAtom(pageAtom)
    useEffect(()=>{
        const currentPage=document.getElementById("page"+pageId)
        currentPage.scrollIntoView({behavior:"smooth"})

        const adjustPage=()=>currentPage.scrollIntoView()
        window.addEventListener('resize',adjustPage);

        return(()=>{
            window.removeEventListener('resize',adjustPage)
            console.log("Yay")
        })
    },[pageId])

    return(
        <div id="pageContainer">
            <About/>
            <FrontEnd/>
            <BackEnd/>
            <Education/>
        </div>
    )
}
export default PageContainer