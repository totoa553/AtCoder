function Main(input){
  input = input / 1000;
  if(input < 0.1){
    VV = "00";
  }else if (0.1 <= input&&input <= 5){
	VV = (input * 10).toString();
	if(VV.length === 1){
      VV = "0"+VV
    }
  }else if(6 <= input&&input <= 30){
    VV = (input + 50).toString();
  }else if(35 <= input&&input <=70){
    VV = ((input -30)/5+80).toString();
  }else if(input > 70){
	VV = "89";
  }
  console.log(VV);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));  