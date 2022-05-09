function Main(input){
  input = input.trim().split('');
  let counter = 0;
  for(let count of input){
    if(count == 1){
    counter = counter+=1;
    }
  }
  console.log(counter)
}
Main(require("fs").readFileSync("/dev/stdin", "utf-8"));