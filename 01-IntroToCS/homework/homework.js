'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let order='';
  let multiplicacion;
  let suma=0;
  //change the position of the elements of string numero
  for (let j=num.length-1;j>=0;j--) {      
      order=order+num[j];        
  }

  for (let i=num.length -1 ; i >= 0 ; i--) {
      multiplicacion=order[i]*Math.pow(2,i);
      suma=suma+multiplicacion;
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  let remainder;
  let quotient=num;
  let save='';
  let resultado='';
  
  while(quotient>0){
      remainder=quotient%2;
      quotient=Math.floor(quotient/2);
      save=save+remainder;
  }
  for (let i=save.length-1;i>=0;i--) {
      resultado=resultado+save[i];
  }
  return resultado;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}