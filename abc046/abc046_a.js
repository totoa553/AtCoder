function Main(input){
  input = input.trim().split(' ');
  var A = 0;
  for(i=1;i <=3; i++){
  	inputt = input.shift();
    if(input.includes(inputt) === false){
      A += 1;
    }
  }
  console.log(A);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));  