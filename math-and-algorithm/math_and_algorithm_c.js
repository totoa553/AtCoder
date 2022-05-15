function Main(input){
  input = input.trim().split("\n")
  A = 0;
  count = input[1].split(" ")
  for(i=0;i<=+input[0] -1;i++){
    A += +count[i]
  }
  console.log(A);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));