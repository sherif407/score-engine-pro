```javascript
import React, { useEffect, useState } from "react"

export default function ActiveGameWidget(){

  const [game,setGame] = useState(null)

  useEffect(()=>{

    const stored = localStorage.getItem("activeGame")

    if(stored){
      setGame(JSON.parse(stored))
    }

  },[])


  if(!game){
    return (
      <div className="widget">
        <h3>No Active Game</h3>
      </div>
    )
  }

  const date = new Date(game.date).toLocaleDateString("en-US",{
    month:"short",
    day:"numeric",
    year:"numeric"
  })


  return (

    <div className="widget">

      <h3>Active Game</h3>

      <div className="widget-section">
        <strong>Players</strong>

        <ul>
          {game.players.map((p,i)=>(
            <li key={i}>{p}</li>
          ))}
        </ul>

      </div>

      <div className="widget-section">
        <strong>Round:</strong> {game.round} / {game.totalRounds}
      </div>

      <div className="widget-section">
        <strong>Date:</strong> {date}
      </div>

    </div>

  )

}
```
