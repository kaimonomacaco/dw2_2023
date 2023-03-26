function generateEvenNumbersArray(maxNumber) {
    let evenNumbersArray = [];
  
    for (let i = 1; i <= maxNumber; i++) {
      if (i % 2 === 0) {
        evenNumbersArray.push(i);
      }
    }
  
    return evenNumbersArray;
  }
  let maxNumber = 10;
  let evenNumbersArray = generateEvenNumbersArray(maxNumber);
  
  console.log(evenNumbersArray); // [2, 4, 6, 8, 10]
    
