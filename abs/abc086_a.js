function Main(input){
  input = input.split(" ");
  if (input[0]*input[1] % 2 === 1){
	console.log("Odd")
  }else{
    console.log("Even")
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));