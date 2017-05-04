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
