function isIterable(arr) {
  //https://stackoverflow.com/questions/18884249/checking-whether-something-is-iterable
  if(arr != null && typeof arr[Symbol.iterator] === 'function' ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
} 


isIterable(null); // false
isIterable('hello world'); // true
isIterable(document.querySelectorAll('.error-message')); // true