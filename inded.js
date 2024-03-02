function removeSmallest(numbers) {
    numbers = numbers.slice(0)
    console.log("num" , numbers)
    let min = Math.min(...numbers)
    console.log(min,"min");
    numbers.splice(numbers.indexOf(min),1)
    return numbers
      
  }

  let numbers = [10,12,14,51,4,2,3]
  console.log(removeSmallest(numbers))