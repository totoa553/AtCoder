function Main(input){
  input = input.split(" ")
  input[0]=parseInt(input[0])
  input[1]=parseInt(input[1])
  if(input[1]%input[0] === 0){
    console.log((input[1]/input[0]+9).toString(36).toUpperCase())
  }else{
	console.log(Math.floor(input[1]/input[0]+10).toString(36).toUpperCase())
  }
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));