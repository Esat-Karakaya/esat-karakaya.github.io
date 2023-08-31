import BackEnd from "../pageContents/Back-End";
import FrontEnd from "../pageContents/Front-End";
import About from "../pageContents/About";
import Education from "../pageContents/Education";
import "../pageContents/pageStyles.css";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { pageAtom } from "../../jotai/atoms";

const PageContainer=()=>{
    const [pageId]=useAtom(pageAtom)
    useEffect(()=>{
        const currentPage=document.getElementById("page"+pageId)
        currentPage.scrollIntoView({behavior:"smooth"})

        const adjustPage=()=>currentPage.scrollIntoView()
        window.addEventListener('resize',adjustPage);

        return(()=>{
            window.removeEventListener('resize',adjustPage)
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