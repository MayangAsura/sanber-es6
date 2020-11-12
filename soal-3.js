var judul = 'Soal 3 : Destructuring' 
console.log(judul)


const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName , lastName, occupation, destination} = newObject;

console.log(firstName, lastName, destination, occupation);
