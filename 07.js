const printOddNumber = () => {
    let index = 1
    while (index <= 100) {
        if(index%2==1){
            console.log(index)
        }
        index++
    }
}

printOddNumber()