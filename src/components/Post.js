import "./Post.css"
import React from "react"
export default class Post extends React.Component {
    state={
        profilePicture: "/profilepic.png",
        name: "Ram Revivo",
        time: "3 min ago",
        content: "hello world, this is ayrd hangout",
        likeIconEmpty: "/like-icon-empty.png",
        likeIconFilled: "/like-icon-filled.png",
        isPostLiked: false
    }

    clickOnLikeIcon = () => {
        this.setState({isPostLiked: !this.state.isPostLiked});
    }

    render=()=>{
        return (
            <div className={"post-container"}>
                <div className={"top-part"}>
                    <img style={{width: "25px", height: "25px"}} className={"post-profile-picture"} src={this.state.profilePicture}
                         alt={"profile"}/>
                    <label style={{fontWeight: "bold", fontSize: "12px"}} className={"post-data"}>{this.state.name} · <label
                        style={{color: "gray"}}>{this.state.time}</label></label>
                </div>
                <div className={"middle-part"}>
                    <label>{this.state.content}</label>
                </div>
                <div className={"bottom-part"}>
                    <img className={"like-icon"}
                         onClick={this.clickOnLikeIcon}
                         src={this.state.isPostLiked? this.state.likeIconFilled: this.state.likeIconEmpty}
                         alt={"like-icon"}/>

                </div>
            </div>
        );
    }






}