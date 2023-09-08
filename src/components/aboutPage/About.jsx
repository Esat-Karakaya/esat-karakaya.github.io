import ContentImg from "../contentImg/contentImg"
import Page from "../page/page"
import "./aboutPageStyle.css"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}  
const photoPlaces=[[24,50,.5],[81,68,.7],[25,80,1],[18,14,1.3],[57,6,.8],[60,64,1]]//Array.from(Array(6).keys()).map(()=>[getRandomInt(0,100),getRandomInt(0,100)])

const About=()=>{
    const startViewing=()=>{
        document.querySelector("#startWith").scrollIntoView({behavior:"smooth"})
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
            <section id="startWith">
                <p>If you want to connect with me and check out my work, you can find me on GitHub, LinkedIn and Twitter. Feel free to drop by and say hi! 😎</p>
                <div className="linkLineup"
                 style={{width:"100%", justifyContent:"center", columnGap:"10%"}}>
                    <a href="#"><img style={{"--order":"0"}} className="reveal logo" alt="Github logo" src="/github.svg"/></a>
                    <a href="#"><img style={{"--order":"1"}} className="reveal logo" alt="LinkedIn logo" src="/linkedin.webp"/></a>
                    <a href="#"><img style={{"--order":"2"}} className="reveal logo" alt="Twitter logo" src="/twitter.svg"/></a>
                </div>
            </section>
            <section style={{position:"relative"}}>
                <div style={{position:"absolute", height:"100%", width:"100%", zIndex:"-1"}}>
                    {photoPlaces.map((el,i)=><div key={i} style={{right:el[0]+"%", bottom:el[1]+"%", transform:`scale(${el[2]})`}} className="galeryPhotos"></div>)}
                </div>
                <p>When I'm not coding or diving into math problems, I enjoy learning German and English. I'm also a nature enthusiast, so you'll often find me swimming, climbing, or hiking. I might also be desinging or drawing, for example I'm currently drawing for a book and this website was designed by me. Do you like it❓</p>
            </section>
        </Page>
    )
}
export default About;