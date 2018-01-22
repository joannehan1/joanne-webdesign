/* exercise 1
for (var tag = '#'; tag.length < 8; tag = tag + '#') {
	console.log(tag);
}
*/
 /* exercise 2
for (var n = 1; n <= 100; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
  	console.log ('FizzBuzz')
  } if (n % 3 === 0 ) {
  	console.log ('Fizz')
  } if (n % 5 === 0) {
  	console.log ('Buzz')
  } else {
  	console.log(n);
  }
} */

///* exercise 3
var board = "";
var size = 8;

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
	//*/