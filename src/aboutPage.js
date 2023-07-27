import { useState } from "react";

const AboutPage=()=>{
    const [user,setuser]= useState("")
    const [publicRepos, resetRepos]=useState([])
    const submitHandle=(e)=>{
        e.preventDefault();
        const currentuser=new FormData(e.target).get("text").toLowerCase()
        if (!currentuser) {
            setuser(currentuser)
            fetch(`https://api.github.com/users/${currentuser}/repos`)
            .then((jsonObj)=>jsonObj.json())
            .then(resetRepos)   
        }
    }
    return(
        <div className="pageContainer">
            <h2>{user}</h2>
            <form onSubmit={submitHandle}>
                <input type="search" name="text"/>
                <input type="submit" value="enter"/>
            </form>
            <div style={{display:publicRepos[0] || publicRepos.message?"block":"none"}}>
                <h3>Public Repositaries</h3>
                {
                    publicRepos.message==="Not Found"?[<p key="error message">Sorry, I think you made that name up</p>]:publicRepos.map((repo)=>{
                        return <a rel="noreferrer" target="_blank" style={{display:"block"}} href={repo.html_url} key={repo.id}>{repo.name}</a>
                    })

                }
            </div>
        </div>
    )
}
export default AboutPage;