const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon']

const removeFruit = (arr, fruit) => arr.filter((item) => item !== fruit)

console.log(removeFruit(fruits, "Jambu" ))