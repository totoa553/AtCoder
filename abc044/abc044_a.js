function Main(input){
  input = input.trim().split("\n");
  var A = 0;
  if(Math.sign(input[0]-input[1]) === 1){
    for(i=1;i <= input[1];i++){
      A += +input[2]
    }
  }else{
    for(i=1;i <= input[0];i++){
      A += +input[2]
    }
  }
  if(Math.sign(input[0]-input[1]) === 1){
    for(i=1; i <= input[0]-input[1]; i++){
      A += +input[3]
    }
  }
  console.log(A);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));  