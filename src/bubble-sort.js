export function bubbleSort(unorderedArray) {
    let endIndex = unorderedArray.length - 1,
        sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < endIndex; i++) {
            if (unorderedArray[i] > unorderedArray[i+1]) {
                sorted = false;
                let tmp = unorderedArray[i];
                unorderedArray[i] = unorderedArray[i+1];
                unorderedArray[i+1] = tmp;
            }
        }

        endIndex--;
    }

    return unorderedArray;
}