// js
var data = [
  [409, 194, 207, 470, 178], // 470 - 178 = 292
  [454, 235, 333, 511, 103], // 511 - 103 = 408
  [474, 293, 525, 372, 408], // 525 - 293 = 232
  [428, 4321, 2786, 6683, 3921], // 6683 - 428 = 6255
  [265, 262, 6206, 2207, 5712] //  6206 - 262 = 5944
]// total 13,131

function checkSum(arrayofarrays){
  let total = 0
  arrayofarrays.forEach(array =>{
      let biggestNumber = Math.max(...array)
      let smallestNumber = Math.min(...array)
      let numberToAdd = biggestNumber - smallestNumber
      total += numberToAdd
    })
    return total
  }
