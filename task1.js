const getCommonElements = (firstArray, secondArray) => {
    const commonElements = []
    firstArray.forEach(element => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });
    return commonElements;
}

const a = getCommonElements([1, 2, 3], [2, 4])
console.log('a', a)