//Write a function called repeatStr which repeats the given string string exactly n times.

//Solution
function repeatStr (n, s) {
var string = '';
for(i = 0; i < n; i ++){
string += s;
}
  return string;
}

//Best Practice
function repeatStr (n, s) {
  return s.repeat(n);
}

//Notes
// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
// 'abc'.repeat(2);    // 'abcabc'

// Your task is to find the first element of an array that is not consecutive.
//
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non consecutive number.
//
// If the whole array is consecutive then return null
//
// The array will always have at least 2 elements and all the elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negetive and the first non-consecutive could be either too!


//Solution
function firstNonConsecutive (arr) {
//loop through array
for(i = 0; i < arr.length-1; i++){
//if statement to check array indexes and return non consecutive number
  if(arr[i]+1 !== arr[i+1]){
  return arr[i+1];
  }
}
return null;
}

//Notes
// Originally I had arr.length+1 which led to an undefined index number which returned undefined on consecutively numbered arrays before I could return null
