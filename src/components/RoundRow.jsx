
import React,{useState,useEffect} from "react"
import {calculatePlusMinus} from "../engine/scoreEngine"

export default function RoundRow({round}){

const [tricks,setTricks] = useState([0,0,0,0])
const [pm,setPM] = useState(0)

useEffect(()=>{
setPM(calculatePlusMinus(tricks))
},[tricks])

function update(i,v){

const copy=[...tricks]
copy[i]=parseInt(v)
setTricks(copy)
}

return(

<tr>

<td>{round.number}</td>

{tricks.map((t,i)=>(

<td key={i}>
<input
type="number"
value={t}
min="0"
max="13"
onChange={e=>update(i,e.target.value)}
/>
</td>

))}

<td>{pm>0?`+${pm}`:pm}</td>

</tr>

)
}
