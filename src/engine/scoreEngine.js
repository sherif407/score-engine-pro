
export function calculatePlusMinus(tricks){
return tricks.reduce((a,b)=>a+b,0) - 13
}

export function calculateScore({tricks,actual,trump,plusMinus}){

if(tricks === "-" && actual === "-"){
if(trump === "C"){
return plusMinus < 0 ? 33 : 23
}
return plusMinus < 0 ? 23 : 13
}

if(actual === tricks){

if(tricks >= 8){
return tricks*tricks
}

if(tricks >=4 && tricks <=7 && trump){
return 20 + tricks
}

return 10 + tricks
}

if(actual !== tricks){

if(tricks >=8){

const map = {
8:-24,
9:-34,
10:-50,
11:-60,
12:-70,
13:-80
}

return map[tricks]
}

if(tricks >=4 && tricks <=7 && trump){
return -10 - Math.abs(tricks-actual)
}

return -Math.abs(tricks-actual)
}
}
