import "./imgStyle.css"
const ContentImg=({description, imgurl})=>{
    return (
    <figure>
        <img className="contentImg" src={imgurl}/>
        {description&&<figcaption>{description}</figcaption>}
    </figure>)
}
export default ContentImg;