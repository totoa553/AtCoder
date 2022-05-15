function Main(input){
  input = input.trim().split(" ")
  A1 = +input[0]
  A2 = +input[1]
  A3 = +input[2]
  console.log(A1*A2*A3);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));