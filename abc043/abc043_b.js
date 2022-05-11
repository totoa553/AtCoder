function Main(input){
  input = input.trim().split('');
  answerarr = [];
  for(i=0;i<=input.length -1;i++){
    if(input[i]==='0'){
      answerarr.push('0')
    }
    if(input[i]==='1'){
      answerarr.push('1')
    }
    if(input[i]==='B'){
      answerarr.pop();
    }
  }
  console.log(answerarr.join(''));
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));  