const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu']

const addFirstAndLastArray = (arr) => {
    arr.unshift('Handuk')
    arr.push('Celana')
    return arr
}

console.log(addFirstAndLastArray(stuff))