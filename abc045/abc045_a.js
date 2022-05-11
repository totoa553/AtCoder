function Main(input){
  input = input.trim().split("\n");
  var a = +input[0];
  var b = +input[1];
  var h = +input[2];
  var A = (a+b)*h/2
  console.log(A);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));  