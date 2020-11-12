var judul = 'Soal 5 : Template Literals' 
console.log(judul)


// var before = 'Lorem ' + view + 'dolor sit amet, ' +       'consectetur adipiscing elit,' + planet + 'do eiusmod tempor ' +     'incididunt ut labore et dolore magna aliqua. Ut enim' +     ' ad minim veniam'   

const planet = "earth"
const view = "glass"
var before = `Lorem ${view}dolor sit amet, 
consectetur adipiscing elit, ${planet}do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim 
ad minim veniam
`

console.log(before) 