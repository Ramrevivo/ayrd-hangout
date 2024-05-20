import "./Dashboard.css"
import React from "react";
import Profile from "./Profile";
import Following from "./Following";
import TopBar from "./TopBar";
import NewPost from "./NewPost";
import Post from "./Post";
export default class Dashboard extends React.Component{
    state={
        profilePicture: "/profilepic.png",
        userName: "Ram Revivo",
        following: "34",
        followers: "150",
        followersList:{
            profilePicture: "/profilepic.png",
            name: "Ram Revivo",
        }
    }
    render() {
        return (
            <div className={"dashboard"}>
                <div id={"top-bar-container"}>
                    <TopBar/>
                </div>
                <div id={"main-container"}>
                    <div id={"left-container"}>
                        <Profile profilePicture={this.state.profilePicture} userName={this.state.userName} following={this.state.following} followers={this.state.followers} />
                        <Following followersLis/>
                    </div>
                    <div id={"middle-container"}>
                        <NewPost/>
                        <Post/>
                    </div>
                    <div id={"right-container"}>

                    </div>
                </div>

            </div>
        );
    }


}