function validateString(str) {
  console.log(str.toLowerCase().indexOf('superman'));
  if (str.toLowerCase().indexOf('superman') === -1) {
      throw new Error('String does not contain superman');
  }    
}
validateString('I love superman');
validateString('Superman is awesome!');
validateString(' is awesome!');