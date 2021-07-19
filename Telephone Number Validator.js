function telephoneCheck(str) {
  
  let regex1 = /^1\d{10}|^\d{10}$/;          
  let regex2 = /^1[-\s*]\d{3}[-\s*]\d{3}[-\s*]\d{4}$/;
  let regex3 = /^1\s{0,1}\(\d{3}\)\s{0,1}\d{3}[-\s]\d{4}$/;
  let regex4 = /^\d{3}[-\s*]\d{3}[-\s*]\d{4}$/;
  let regex5 = /^\(\d{3}\)[-\s]*\d{3}[-\s]\d{4}$/;
  let count = 0;
  
  regex1.test(str) ? count++ : null;
  regex2.test(str) ? count++ : null;
  regex3.test(str) ? count++ : null;
  regex4.test(str) ? count++ : null;
  regex5.test(str) ? count++ : null;

  return count > 0 ? true : false;
}