import ContentImg from "../contentImg/contentImg"
const About=()=>{
    return(
        <div id="page0" className="page">
            <h1>Hello There!</h1>
            <section id="greet" >
                <ContentImg imgurl="/me.jpeg"/>
                <p>I'm Esat, a 14 year old who has a passion for math and programming. I'm a self-thought full stack programmer and can both visualize and handle data. But there is much more to that! Which is why i separated them to two different pages. Here i just want to introduce myself 😉</p>
            </section>
        </div>
    )
}
export default About;