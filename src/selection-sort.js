export function selectionSort(unorderedArray) {
    for (let i = 0; i < unorderedArray.length; i++) {
        let lowestIndex = i;

        for (let j = i + 1; j < unorderedArray.length; j++) {
            if (unorderedArray[j] < unorderedArray[lowestIndex]) {
                lowestIndex = j;
            }
        }

        if (lowestIndex != i) {
            const tmp = unorderedArray[i];
            unorderedArray[i] = unorderedArray[lowestIndex];
            unorderedArray[lowestIndex] = tmp;
        }
    }

    return unorderedArray;
}
