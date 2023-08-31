import ContentImg from "../contentImg/contentImg"
import Page from "../page/page"
const About=()=>{
    const startViewing=()=>{
        document.querySelector("#startWith").scrollIntoView({behavior:"smooth"})
    }
    return(
        <Page id="0">
            <section>
                <h1>Hello There!</h1>
                <div className="flex">
                    <ContentImg alt="me" imgurl="/me.jpeg"/>
                    <p>I'm Esat, a 14 year old who has a passion for programming. I'm a self-thought full stack programmer and can both visualize and handle data. But there is much more to that! Which is why i separated them to two different pages. Here i just want to introduce myself 😉</p>
                </div>
                <button onClick={startViewing} className="pageButton">Let's Start</button>
            </section>
            <section id="startWith">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, dolore vitae? Accusamus, exercitationem qui, nesciunt beatae impedit incidunt neque odit ab optio distinctio quis eaque maiores ipsum repellendus, voluptatem dignissimos.</p>
            </section>
        </Page>
    )
}
export default About;