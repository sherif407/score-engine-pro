// src/engine/scoreEngine.js

export function plusMinus(tricks){
  const sum = tricks.reduce((a,b)=>a + (b==="-"?0:b),0)
  return sum - 13
}

export function scoreCall({tricks, actual, trump, pm}){

  if(tricks === "-"){

    if(actual === "-"){
      if(trump === "C"){
        return pm < 0 ? 33 : 23
      }
      return pm < 0 ? 23 : 13
    }

    if(trump === "C"){
      return pm < 0 ? -23 : -13
    }

    return pm < 0 ? -13 : -11
  }

  tricks = Number(tricks)
  actual = Number(actual)

  if(actual === tricks){

    if(tricks >= 8){
      return tricks * tricks
    }

    if(tricks >=4 && tricks <=7 && trump){
      return 20 + tricks
    }

    return 10 + tricks
  }

  if(tricks >= 8){

    const miss = {
      8:-24,
      9:-34,
      10:-50,
      11:-60,
      12:-70,
      13:-80
    }

    return miss[tricks]
  }

  if(tricks >=4 && tricks <=7 && trump){
    return -10 - Math.abs(tricks-actual)
  }

  return -Math.abs(tricks-actual)
}
