export function insertionSort(unorderedArray) {
    for (let i = 1; i < unorderedArray.length; i++) {
        let position = i,
            tempValue = unorderedArray[position];

        while (position > 0 && unorderedArray[position - 1] > tempValue) {
            unorderedArray[position] = unorderedArray[position - 1];
            position -= 1;
        }

        unorderedArray[position] = tempValue;
    }

    return unorderedArray;
}
