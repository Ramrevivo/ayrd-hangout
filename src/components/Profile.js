import "./Profile.css"
export default function Profile(props) {
    const profilePicture = props.profilePicture
    const username = props.userName
    const following = props.following
    const followers = props.followers

    return (
        <div className={"profile"}>

            <div>
                <img className={"profile-picture"} src={profilePicture} alt={"profile"}/>
                <br/>
                <label className={"username"}> {username} </label>
            </div>
            <div className={"following"}>
                <label>Following</label>
                <br/>
                <label style={{color: "black"}}>{following}</label>
            </div>
            <div className={"followers"}>
                <label>Followers</label>
                <br/>
                <label style={{color: "black"}}>{followers}</label>
            </div>
        </div>
    );
}