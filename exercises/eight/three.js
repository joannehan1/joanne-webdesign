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
  if( (k % 9)==0){
    console.log(k % 9);
    chess = chess + "\n";
  }else if( (k % 2)==0 ){
    console.log(k % 2);
    chess = chess + "#";
  }else{
    chess = chess + " ";
  }
  
}

console.log('––––––');
console.log(chess);
