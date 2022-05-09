function Main(input){
  input = input.split("\n")
  H1 = input[0];
  H2 = input[1];
  A = H1 - H2;
  console.log(A);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));  