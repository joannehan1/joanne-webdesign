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

// exercise 3
var board = "";

for(var k = 1; k<64; k++){
  console.log(k);
  if( (k%2)==0 ){
    console.log(k%2);
    board = board + "#";
  }if( !((k%2)==0) ){
    board = board + " ";
  }if( (k%9)==0){
    console.log(k%9);
    board = board + "\n";
  }
}

console.log('––––––');
console.log(board);

var chess = "";
for(var k = 1; k<64; k++){
  console.log(k);
  if( (k%9)==0){
    console.log(k%9);
    chess = chess + "\n";
  }else if( (k%2)==0 ){
    console.log(k%2);
    chess = chess + "#";
  }else{
    chess = chess + " ";
  }
  
}

console.log('––––––');
console.log(chess);
	

