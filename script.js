/* Fetch de Api */
/*const url="https://min-api.cryptocompare.com/data/price?fsym=EHT&tsyms=USD,ETH,LTC/1/";
const options = {
  method : 'GET',
  headers:{
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '"Teste": "js"',
 fetch(url, options)
 .then(Response => Response.json())
 .then(json => console.log(json());*/






console.log(document.forms);
/*testando elementos do formuulário*/
for(var i = 0; i < document.forms.length; i++){
  console.log('testando formulario',document.forms[i])}

/*função para retornar */
function calcPia(){
  const piaA =( document.querySelector('.piaA'));
  const a =(piaA.elements.piaAlt.value);
  
  const bpia =(document.querySelector('#piaB'));
  const b = (bpia.elements.piaLa.value);
  
  const piaM = (document.querySelector('#piaC'));
  const c=(piaM.elements.piaMa.value);
  if (a!== 0 && a!== " " && b!== 0 && b!== " ")
    return a*b*c;
  else
    return ('Insira valor válido') ; 
}

const pia =document.querySelector('.piaA')
pia.innerText = calcPia()

/* testando input pia*/ 
const piaA =( document.querySelector('.piaA'));
const a =(piaA.elements.piaAlt.value);
console.log('teste', a)
const bpia =(document.querySelector('#piaB'));
const b = (bpia.elements.piaLa.value);
console.log('teste', b)
const piaC = (document.querySelector('#piaC'));
const c=(piaC.elements.piaMa.value);
console.log('teste',c);
/* testando input bancada*/ 
const bancadaA =( document.querySelector('#bancadaA'));
const ba =(bancadaA.elements.banAlt.value);
console.log('teste',ba)
const bancadaB =(document.querySelector('#bancadaB'));
const bb = (bancadaB.elements.banLa.value);
console.log('teste', bb)
const bancadaC = (document.querySelector('#bancadaC'));
const bc=(bancadaC.elements.banMa.value);
console.log('teste',bc);
/* testando piscina*/
const piscinaA =( document.querySelector('#piscinaA'));
const ca =(piscinaA.elements.pisA.value);
console.log('teste',ca)
const piscinaB =(document.querySelector('#piscinaB'));
const cb = (piscinaB.elements.pisL.value);
console.log('teste', cb)
const piscinaC = (document.querySelector('#piscinaC'));
const cc=(piscinaC.elements.pisP.value);
console.log('teste',cc);
const piscinaD = (document.querySelector('#piscinaD'));
const cd=(piscinaD.elements.pisD.value);
console.log('teste',cd);


/* puxando inputs*/
const Ppia = document.querySelector('.p-pia')
const texto = document.querySelector('.texto')
 function handleKeyUp(event){
  console.log(event.target.value)
  document.innerText = event.target.value
 }
 

 contato.addEventListener('change', handleKeyUp)
 piaA.addEventListener('change', handleKeyUp)
 piaB.addEventListener('change', handleKeyUp)
 piaC.addEventListener('change', handleKeyUp)
 bancadaA.addEventListener('change', handleKeyUp)
 bancadaB.addEventListener('change', handleKeyUp)
 bancadaC.addEventListener('change', handleKeyUp)
 piscinaA.addEventListener('change', handleKeyUp)
 piscinaB.addEventListener('change', handleKeyUp)
 piscinaC.addEventListener('change', handleKeyUp)
 piscinaD.addEventListener('change', handleKeyUp)



