function replaceValueInArray(arr, oldValue, newValue) 
{
    for (let i = 0; i < arr.length; i++) 
    {
      if (arr[i] === oldValue) 
      {
        arr[i] = newValue;
      }
    }
  
    return arr;
  }
  let arr = [1, 2, 3, 4, 5];
  let oldValue = 3;
  let newValue = 6;
  
  arr = replaceValueInArray(arr, oldValue, newValue);
  
  console.log(arr); // [1, 2, 6, 4, 5]
    