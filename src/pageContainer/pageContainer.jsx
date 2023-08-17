import BackEnd from "./pages/Back-End";
import FrontEnd from "./pages/Front-End";
import About from "./pages/About";
import Education from "./pages/Education";
import "./pageStyle.css";

const PageContainer=()=>{
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