// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const clubs = [
  {
    name: 'juventus',
    points: 0,
    foulPlay: 0
  },
  {
    name: 'milan',
    points: 0,
    foulPlay: 0
  },
  {
    name: 'inter',
    points: 0,
    foulPlay: 0
  },
  {
    name: 'crotone',
    points: 0,
    foulPlay: 0
  },
]
//Creo un ciclo con numeri random per i punti e i falli fatti
for (let i = 0; i < clubs.length; i++){
  clubs[i].points =  Math.ceil(Math.random() * 100);
  clubs[i].foulPlay =  Math.ceil(Math.random() * 100);
}

//Creo un array dove ci vado a mettere il nome e i falli fatti
const clubsMapped = []
//Creo un ciclo dove vado a inserire i dati nell 'array
for (let i = 0; i < clubs.length; i++){
  const {name, foulPlay} = clubs[i];
  const newClub = {
    name,
    foulPlay
  }
  //Pusho i dati nell'array
  clubsMapped.push(newClub)
}


console.log(clubsMapped)