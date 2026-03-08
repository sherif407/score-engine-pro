export function processRound(rounds, index){

  const round = rounds[index]

  if(round.cancelled){

    if(round.double){
      rounds[index+1].double = true
      rounds[index+2].double = true
    }else{
      rounds[index+1].double = true
    }

  }

  return rounds
}
