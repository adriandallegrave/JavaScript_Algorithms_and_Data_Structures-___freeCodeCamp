function camelToSpinal(str) {
  let split = str.split("");
  let arr = [];

  arr.push(split[0]);

  for (let i = 1; i < split.length; i++) {
     if (/[A-Z]/.test(split.i)) {
      arr.push("-");
    } 
    arr.push(split[i]);
  }
  return arr;
}

function spinalCase(str) {

  let arr = [];
  let regex = /(\s|_|-)/;
  let regex2 = /[a-z]+(?=[A-Z])/;
  let changedStr = str.split(regex);

  for (let i = 0; i < changedStr.length; i++) {
    if (changedStr[i] == "_" || changedStr[i] == " ") {
      changedStr[i] = "-";
    }
    if (regex2.test(changedStr[i])) {
      arr = camelToSpinal(changedStr[i]);
      changedStr.splice(i, 1, arr)
    }
  }

  changedStr = changedStr.flat();

  for (let i = 0; i < changedStr.length; i++) {
    changedStr[i] = changedStr[i].toLowerCase();
  }  

  changedStr = changedStr.join("");

  return changedStr;
}

spinalCase("This Is Spinal Tap");