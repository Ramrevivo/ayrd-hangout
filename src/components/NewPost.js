import "./NewPost.css"
export default function NewPost(){
    return(
        <div className="accent">
            <div className="new-post-container">
                <img style={{width: "25px", height: "25px"}} className={"profile-picture"} src={"/profilepic.png"}
                     alt={"profile"}/>
                <input className={"post-input"} type={"text"} placeholder={"New Post"}/>
                <button className={"post-button"}>Post</button>
            </div>

        </div>
    );
}