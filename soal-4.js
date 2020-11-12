var judul = 'Soal 4 : Array Spreading' 
console.log(judul)

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
// const combined = west.concat(east)

let combined = [...west, ...east]
console.log(combined)