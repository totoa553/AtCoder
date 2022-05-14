function Main(input){
  input = input.split("/n").join("").trim()
  if(input.length === 1){
    console.log((input+input+input+input+input+input))
  }else if(input.length === 2){
    console.log((input+input+input))
  }else if(input.length === 3){
    console.log((input+input))
  }
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));