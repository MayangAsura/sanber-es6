var judul = 'Soal 2 : Sederhanakan menjadi Object literal di ES6' 
console.log(judul)

// const newFunction = function literal(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName,
//       fullName: function(){
//         console.log(firstName + " " + lastName)
//         return 
//       }
//     }
// }

const newFunction = function literal(firstName, lastName) {
    return{
        firstName, lastName,
        fullName: () => console.log(firstName + " " + lastName) 
    }
}

newFunction("William", "Imoh").fullName() 
