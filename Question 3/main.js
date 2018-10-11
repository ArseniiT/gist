/* function phonenumber(txt) {
  let exp = /^(\([0-9]{3}\)\s?|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
  if(txt.value.match(exp)) {
    return true;
  }  
  else {  
    return false;
  }
} */

function phonenumber(txt) {
   let numberArr = [];

  if(txt.length >= 10 ) {
    for (let i = 0; i < txt.length; i++) {
      if(!isNaN(parseInt(txt[i]))) {
        numberArr.push(txt[i]);
      }
      
    }
  }

  if(numberArr.length == 10) {
    return true;
  }  
  else {  
    return false;
  }
}

console.log(phonenumber('5146383044'));
console.log(phonenumber('514 638 30-44'));
console.log(phonenumber('514-638-30-44'));
console.log(phonenumber('514-63 8-30-44'));