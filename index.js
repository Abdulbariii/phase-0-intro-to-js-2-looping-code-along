// Code your solutions in this file
function writeCards(array, surprise) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(`Thank you, ${array[i]}, for the wonderful ${surprise} gift!`);
  }
  return arr;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "birthday"));

function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}
countDown(10);
