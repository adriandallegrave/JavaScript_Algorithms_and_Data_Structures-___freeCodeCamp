// checks if string is a palindrome 
function palindrome(str) {
  
  let arr = str.split("");
  let regex = /[a-z0-9]/i;
  let pali = [];  

  // removes alphanumeric chars and lowercase everything
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i])) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr.splice (i, 1);
      i--;
    }
  }

  // populates pali array with reversed arr
  for (let i = 0; i < arr.length; i++) {
    pali[i] = arr[arr.length - 1 - i];
  }

  // returns result
  return arr.join("") == pali.join("") ? true : false;
}