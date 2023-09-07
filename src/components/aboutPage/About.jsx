import ContentImg from "../contentImg/contentImg"
import Page from "../page/page"
import "./aboutPageStyle.css"
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
                    <a href="#"><img style={{"--order":"1"}} className="reveal logo" alt="LinkedIn logo" src="/linkedin.png"/></a>
                    <a href="#"><img style={{"--order":"2"}} className="reveal logo" alt="Twitter logo" src="/twitter.svg"/></a>
                </div>
            </section>
            <section>
                <p>When I'm not coding or diving into math problems, I enjoy learning German and English. I'm also a nature enthusiast, so you'll often find me swimming, climbing, or hiking 😊</p>
            </section>
        </Page>
    )
}
export default About;