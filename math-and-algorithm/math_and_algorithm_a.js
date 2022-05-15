function Main(input){
  input.trim().split("\n")
  input = +input+5
  console.log(input);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));