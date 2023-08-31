import "./imgStyle.css"
const ContentImg=({description, imgurl, alt})=>{
    return (
    <figure>
        <img alt={alt} className="contentImg" src={imgurl}/>
        {description&&<figcaption>{description}</figcaption>}
    </figure>)
}
export default ContentImg;