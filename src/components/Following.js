import "./Following.css"
export default function Following(){
    const friends = [
        <Follower/>,
        <Follower/>,
        <Follower/>,
        <Follower/>,
        <Follower/>
    ]
    return(
        <div className={"followers-container"}>
            <div className={"title"}>
                <label style={{fontWeight: "bold"}}>Followers</label>
            </div>
            <div >
                {
                    friends.map((friend, i) => {
                        return(
                            <Follower friend={friend}/>
                        )
                    })
                }
            </div>
            <div className={"view-more"}>View More</div>
        </div>
    );
}

function Follower(props) {
    const img = "/profilepic.png"
    const name = "Ram Revivo"
    return(
        <div className={"follower"}>
            <img className={"picture"} src={img} alt={"profile"}/>
            <label className={"name"}>{name}</label>
        </div>
    );
}