function addAny(x) {
  let arr = [];
  let test = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  for (let i = 0; i < test.length; i++) {
    if (x >= test[i]) {
      arr.push(roman[i]);
      x -= test[i];
      return [arr, x].flat();
    }
  }
}  

function convertToRoman(num) {
  let rom = [];
  let arr = [];

  while (num > 0) {
    arr = addAny(num);
    num = arr[1];
    rom.push(arr[0]);
  }
 return rom.join("");      
}