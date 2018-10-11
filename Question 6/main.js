
document.addEventListener("DOMContentLoaded", function(event) {

    // https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript

    function getColorFromName(str) {
      let hash = 0;
      let givenName = str.split(' ')[0];
      for (var i = 0; i < givenName.length; i++) {
          hash = givenName.charCodeAt(i) + ((hash << 5) - hash);
      }
      var color = '#';
      for (var i = 0; i < 3; i++) {
          var value = (hash >> (i * 8)) & 0xFF;
          color += ('00' + value.toString(16)).substr(-2);
      }
      return color;
    }


    let name = 'John Doe';
    const color = getColorFromName(name);
    console.log(color);



    let btn = document.querySelector('.btn');
    btn.addEventListener('click',function() {

      name = document.querySelector('.name').value;
      document.querySelector('.color').style.backgroundColor = getColorFromName(name);
      document.querySelector('.txt-color').innerHTML = getColorFromName(name);
      
    } , false);


});