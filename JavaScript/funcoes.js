function media(x, y) {
    var m = ((x+y)/2);
    return m;
}

function escreverNumerosAte(n) {
    var i = 1;
   do {
       
     console.log(i);
        i++;
       
   }  while (i <= n);

}

function divisiveisPor(x, y){
  var z = 1;  
    while((x*z) <= y){
        console.log(x*z);
        z++;
    }
}

var vetor = null;

function maiorMenor(){
  
    var maior = Math.max.apply(null, vetor);
    var menor = Math.min.apply(null, vetor);
    console.log("Maior: "+maior);
    console.log("Menor: "+menor);
}