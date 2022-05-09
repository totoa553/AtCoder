function Main(input){
  input = input.split('');
  input.splice(0, 0, '0');
  console.log(input[0]+input[1]+input[2]+input[3])
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));  