// function removeSmallest(numbers) {
//     numbers = numbers.slice(0)
//     console.log("num" , numbers)
//     let min = Math.min(...numbers)
//     console.log(min,"min");
//     numbers.splice(numbers.indexOf(min),1)
//     return numbers
      
//   }

//   let numbers = [10,12,14,51,4,2,3]
//   console.log(removeSmallest(numbers))



  var number = function(busStops){
    // Good Luck!
    let totalPassanger = 0;
    for(let i = 0; i < busStops.length; i++){
        totalPassanger += busStops[i][0]
        console.log("1" , totalPassanger);
        totalPassanger -= busStops[i][1]
        console.log("a", busStops[i][1]);
        console.log("2" , totalPassanger);
    }
    return totalPassanger
  }
console.log((number([[10,0],[3,5],[5,8]])));


