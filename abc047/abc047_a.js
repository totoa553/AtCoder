function Main(input){
  input = input.trim().split(' ')
  inputmax = Math.max(...input);
  inputsum = 0;
  for(i=0;i<=2;i++){
    if(input[i]!=inputmax){
      inputsum += +input[i];
    }
  }
  if(inputmax === inputsum){
    console.log("Yes");
  }else{
    console.log("No");
  }
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));  