import Nav from "./components/nav/nav";
import PageContainer from "./components/pageContainer/pageContainer";
import ContactForm from "./components/modal/modal"
import { useEffect } from "react";

const App=()=> {
    useEffect(()=>{
        const observer =new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add("show")
                    observer.disconnect();
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".reveal")
        hiddenElements.forEach((el) => observer.observe(el))
    },[])
    return(
        <>
            <Nav/>
            <PageContainer/>
            <ContactForm/>
        </>
    )
}

export default App;