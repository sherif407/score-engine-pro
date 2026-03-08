import React, { useState, useEffect } from "react"

export default function RoundRow({ round }) {

  const [tricks,setTricks] = useState([0,0,0,0])
  const [actual,setActual] = useState([0,0,0,0])
  const [pm,setPM] = useState(0)
  const [cancelled,setCancelled] = useState(false)

  // calculate +/-
  useEffect(()=>{

    const sum = tricks.reduce((a,b)=> a + (b === "-" ? 0 : Number(b)),0)

    const plusMinus = sum - 13

    setPM(plusMinus)

  },[tricks])



  // cancelled round check
  useEffect(()=>{

    const missed = tricks.filter((t,i)=> t !== actual[i])

    setCancelled(missed.length === 4)

  },[tricks,actual])



  function updateTrick(i,value){

    const copy=[...tricks]

    copy[i] = value === "-" ? "-" : Number(value)

    setTricks(copy)
  }



  function updateActual(i,value){

    const copy=[...actual]

    copy[i] = value === "-" ? "-" : Number(value)

    setActual(copy)
  }



  // trick restriction for player 4
  const p1 = tricks[0] === "-" ? 0 : Number(tricks[0])
  const p2 = tricks[1] === "-" ? 0 : Number(tricks[1])
  const p3 = tricks[2] === "-" ? 0 : Number(tricks[2])

  const remaining = 13 - (p1 + p2 + p3)

  const p4options = []

  for(let i=0;i<=remaining;i++){
    p4options.push(i)
  }



  // render round symbol
  function renderSymbol(){

    if(!round.symbol){
      return round.number
    }

    if(round.symbol === "☀"){
      return <span className="sun">☀</span>
    }

    if(round.symbol === "♠"){
      return <span className="spade">♠</span>
    }

    if(round.symbol === "♥"){
      return <span className="heart">♥</span>
    }

    if(round.symbol === "♦"){
      return <span className="diamond">♦</span>
    }

    if(round.symbol === "♣"){
      return <span className="club">♣</span>
    }

    return round.symbol
  }



  return (

<tr className={cancelled ? "cancelled" : ""}>

<td>

{renderSymbol()}

</td>


{/* TRICKS */}

{tricks.map((t,i)=>{

if(i===3){

return(

<td key={i}>

<select
value={t}
onChange={e=>updateTrick(i,e.target.value)}
>

{p4options.map(v=>(

<option key={v} value={v}>{v}</option>

))}

<option value="-">-</option>

</select>

</td>

)

}



return(

<td key={i}>

<select
value={t}
onChange={e=>updateTrick(i,e.target.value)}
>

{Array.from({length:14},(_,i)=>i).map(v=>(

<option key={v} value={v}>{v}</option>

))}

<option value="-">-</option>

</select>

</td>

)

})}



{/* ACTUAL */}

{actual.map((a,i)=>(

<td key={i}>

<select
value={a}
onChange={e=>updateActual(i,e.target.value)}
>

{Array.from({length:14},(_,i)=>i).map(v=>(

<option key={v} value={v}>{v}</option>

))}

<option value="-">-</option>

</select>

</td>

))}



{/* +/- */}

<td>

{pm > 0 ? `+${pm}` : pm}

</td>


</tr>

  )
}
