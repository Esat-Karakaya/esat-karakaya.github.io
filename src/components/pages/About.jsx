const About=()=>{
    return(
        <div id="page0" className="page">
            <h2>Hello There!</h2>
            <section>
                <p>I'm Esat, a 14 year old who has a passion for math and programming. I'm a self-thought full stack programmer and can both visualize and handle data. But there is much more to that! Which is why i separated them to two different pages. Here i just want to introduce myself 😉</p>
                <img className="exampleImg" src="/me.jpeg"/>
            </section>
            <section style={{flexDirection:"column", alignItems:"start"}}>
                <h3>My Hobbies</h3>
                <p>Like i said, i like math and programming, i attended to several math competitions and solve coding challenges like <a href="https://adventofcode.com/" target="blank">advent-of-code</a> every few days. But aside from that i really enjoy being alongside wildlife and love every creature. Other activities i enjoy definitely includes swimming (at sea) and basketball. Speaking of hobbies here are some nice pictures i want to share with you 📷</p>
            </section>
        </div>
    )
}
export default About;