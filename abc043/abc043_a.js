function Main(input){
  var A =0;
  for(i=1;i<=input;i++){
    A += i;
  }
  console.log(A);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));  