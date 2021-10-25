/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/

//Creo la mia array di Oggetti
const items = [
{//indice 0
  nome : 'Bianchi Infinito',
  peso : 8
},
{//indice 1
  nome : 'Bottecchia',
  peso : 6
},
{//indice 2
  nome : 'Passoni',
  peso : 7
},
{//indice 3
  nome : 'De Rosa',
  peso : 5
},
]
console.log("Array Biciclette", items);



itemspeso() //Richiamo la funzione
function itemspeso(peso){
  let minBici = {
    peso: Infinity
  }
  for (let i = 0; i < items.length; i++){
    //destructuring e prendo tutti gli elementi dell'arrey 
    // const nome = items[i].nome
    // const peso = items[i].peso
    const { nome, peso } = items[i];
    if(peso < minBici.peso){
      minBici = {
        nome,
        peso
      }
    }
  }
  console.log(minBici)
}








