const squares = document.getElementById('container').querySelectorAll('.square');
const reset = document.getElementById('reset');


squares.forEach(function(e) {
   e.addEventListener('mouseover', () => {
     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
     e.style.backgroundColor = '#' + randomColor;
   });
 });

reset.addEventListener('click', () => {
  const ask = prompt('Choose a number of squares');
  squares.forEach(function(e) {
    e.style.backgroundColor = 'aqua';
    
   e.addEventListener('mouseover', () => {
     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
     e.style.backgroundColor = '#' + randomColor;
   });
 });
});




