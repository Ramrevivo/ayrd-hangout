import "./TopBar.css"
export default function TopBar(){
    const colors = [
        "#2DB2FD",
        "#FF5C5C",
        "#99E265",
        "#FFBE4A"
    ]
    const changeColor=()=>{
        let randomNumber = Math.floor(Math.random()* 4);
        console.log(randomNumber)
        document.querySelector(':root').style.setProperty('--choosedcolor', colors.at(randomNumber))
    }
    return(
        <div className={"top-bar"}>
            {/*<label className={"space"}>ssadasddsasd</label>*/}
            <img
                className={"icon"}
                src={"/ayrdbubbles.png"}
                alt={"icon"}
                onClick={changeColor}
            />
            <input className={"search"} type="search" placeholder="Search" />
        </div>
    );
}