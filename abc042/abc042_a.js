function Main(input){
  input = input.trim().split(' ');
  if(input.filter(n => n === '5').length===2&&input.filter(n => n === '7').length===1){
    console.log('YES');
  }else{
    console.log('NO');
  }
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));  