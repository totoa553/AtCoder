function Main(input){
  input = input.trim().split("\n")
  console.log((2*+input)+3)
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
