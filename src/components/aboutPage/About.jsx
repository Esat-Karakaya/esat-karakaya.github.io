import { useEffect } from "react"
import ContentImg from "../contentImg/contentImg"
import Page from "../page/page"
import "./aboutPageStyle.css"
const About=()=>{
    const startViewing=()=>{
        document.querySelector("#startWith").scrollIntoView({behavior:"smooth"})
    }

    useEffect(()=>{
        const observer =new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add("show")
                } else {
                    entry.target.classList.add("hide")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden")
        hiddenElements.forEach((el) => observer.observe(el))
    },[])
    return(
        <Page id="0">
            <section>
                <h1>Hello There!</h1>
                <div className="lineup">
                    <ContentImg alt="me" imgurl="/me.webp"/>
                    <p>I'm Esat, a 14 year old who has a passion for programming. I'm a self-thought full stack programmer and can both visualize and handle data. But there is much more to that! Which is why i separated them to two different pages. Here i just want to introduce myself 😉</p>
                </div>
                <button onClick={startViewing} className="pageButton">Let's Start</button>
            </section>
            <section id="startWith">
                <p>If you want to connect with me and check out my work, you can find me on GitHub, LinkedIn and Twitter. Feel free to drop by and say hi! 😎</p>
                <div className="linkLineup"
                 style={{width:"100%", justifyContent:"center", rowGap:"1rem",columnGap:"5rem"}}>
                    <a href="#"><img className="profileLink" alt="Github logo" src="/github.svg"/></a>
                    <a href="#"><img className="profileLink" alt="LinkedIn logo" src="/linkedin.png"/></a>
                    <a href="#"><img className="profileLink" alt="Twitter logo" src="/twitter.svg"/></a>
                </div>
            </section>
        </Page>
    )
}
export default About;