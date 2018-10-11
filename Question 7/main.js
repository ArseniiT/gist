const nodes = document.querySelectorAll('button');
for (let i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function() {
      console.log(`You clicked button #${i}`);
   });
}
/* 
You clicked button #0
main.js:4 You clicked button #1
main.js:4 You clicked button #2
main.js:4 You clicked button #3
main.js:4 You clicked button #4
main.js:4 You clicked button #5 */