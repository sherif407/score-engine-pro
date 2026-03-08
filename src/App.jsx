
import React,{useState} from "react"
import ScoreSheet from "./components/ScoreSheet"
import Archive from "./components/Archive"

export default function App(){

const [screen,setScreen] = useState("home")
const [activeGame,setActiveGame] = useState(null)

return(

<div className="container">

<h1>Score Engine Pro</h1>

{screen==="home" && (

<>

<button onClick={()=>setScreen("new")}>New Game</button>
<button onClick={()=>setScreen("archive")}>Archive</button>

{activeGame && (
<div>
<h3>Active Game</h3>
Players: {activeGame.players.join(", ")}
</div>
)}

</>
)}

{screen==="new" && (
<ScoreSheet
setActiveGame={setActiveGame}
goHome={()=>setScreen("home")}
/>
)}

{screen==="archive" && (
<Archive goHome={()=>setScreen("home")} />
)}

</div>

)
}
