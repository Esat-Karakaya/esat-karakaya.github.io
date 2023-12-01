import { useState } from "react"
import ContentImg from "../contentImg/contentImg"
import Page from "../page/page"
import "./aboutPageStyle.css"

const parallaxLayers=[[90,25,-10, "/runningkids.svg"],[0,90,-10, "/handshaking.svg"],[25,80,-20, "/feedingabird.webp"],[30,25,10 , "/holdingachick.webp"],[57,9,3, "/pickingapples.webp"],[60,64,4,"/kidsdrawing.svg"]]

const About=()=>{
    const [focusAddon, setFocusAddon]=useState(0)
    const startViewing=()=>{
        document.querySelectorAll("section")[1].scrollIntoView({behavior:"smooth"})
    }
    const switchPFocus=()=>{
        if (focusAddon==0) {
            setFocusAddon(-12)
            return;
        }
        setFocusAddon(0)
    }
    return(
        <Page id="0">
            <section>
                <h1>Hello There!</h1>
                <div className="lineup">
                    <ContentImg alt="me" imgurl="/me.webp"/>
                    <p>I'm Esat, a 14 year old who has a passion for programming. I'm a self-thought full stack programmer and can both visualize and handle data. But there is much more to that! Which is why i separated them to two different pages. Here i just want to introduce myself 😉</p>
                </div>
                <button onClick={startViewing} className="startButton">Let's Start</button>
            </section>
            
            <section>
                <p>If you want to connect with me and check out my work, you can find me on GitHub, LinkedIn and Twitter. Feel free to drop by and say hi! 😎</p>
                <div className="linkLineup"
                 style={{width:"100%", justifyContent:"center", columnGap:"10%"}}>
                    <a href="#"><img style={{"--order":"0"}} className="reveal logo" alt="Github logo" src="/logos/github.svg"/></a>
                    <a href="#"><img style={{"--order":"1"}} className="reveal logo" alt="LinkedIn logo" src="/logos/linkedin.webp"/></a>
                    <a href="#"><img style={{"--order":"2"}} className="reveal logo" alt="Twitter logo" src="/logos/twitter.svg"/></a>
                </div>
            </section>

            <section>
                {parallaxLayers.map((el,i)=>
                    <a
                    target="_blank"
                    href={"/parallaxImgs"+el[3]}
                    key={i}
                    className="parallaxLink"
                    style={{right:el[0]+"%", bottom:el[1]+"%", transform:`translateZ(${ el[2]+focusAddon }px)`}}>
                        <img
                        className="parallaxPhotos"
                        src={"/parallaxImgs"+el[3]}/>
                    </a>
                )}

                <p onClick={switchPFocus}>When I'm not coding or diving into math problems, I enjoy learning German and English. I'm also a nature enthusiast, so you'll often find me swimming, climbing, or hiking. I might also be desinging or drawing, for example I'm currently drawing for a book and this website was designed by me. Do you like it❓</p>
            </section>
            <section style={{backgroundColor:"white"}}></section>
        </Page>
    )
}
export default About;