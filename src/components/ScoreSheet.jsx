
import React,{useState} from "react"
import {createGame} from "../engine/gameManager"
import RoundRow from "./RoundRow"

export default function ScoreSheet({setActiveGame,goHome}){

const [players,setPlayers] = useState(["P1","P2","P3","P4"])
const [game,setGame] = useState(null)

function start(){

const g = createGame(players)

g.rounds = Array.from({length:13},(_,i)=>({
number:i+1,
tricks:[0,0,0,0],
actual:[0,0,0,0]
}))

setGame(g)
setActiveGame(g)
}

return(

<div>

{!game && (
<>
<h3>Players</h3>
{players.map((p,i)=>(
<input
key={i}
value={p}
onChange={e=>{
const copy=[...players]
copy[i]=e.target.value
setPlayers(copy)
}}
/>
))}

<br/>
<button onClick={start}>Create Game</button>
</>
)}

{game && (

<table>

<thead>
<tr>
<th>Round</th>
<th>P1</th>
<th>P2</th>
<th>P3</th>
<th>P4</th>
<th>+/-</th>
</tr>
</thead>

<tbody>

{game.rounds.map((r,i)=>(
<RoundRow key={i} round={r}/>
))}

</tbody>

</table>

)}

<br/>
<button onClick={goHome}>Home</button>

</div>

)
}
