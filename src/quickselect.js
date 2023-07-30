export function quickselect(kthLowestValue, unorderedArray) {
    function swap(index1, index2) {
        const temp = unorderedArray[index1];
        unorderedArray[index1] = unorderedArray[index2];
        unorderedArray[index2] = temp;
    }

    function partition(leftIndex, rightIndex) {
        const pivotPosition = rightIndex,
            pivot = unorderedArray[pivotPosition];

        rightIndex -= 1;

        while (true) {
            while (unorderedArray[leftIndex] < pivot) {
                leftIndex += 1;
            }

            while (unorderedArray[rightIndex] > pivot) {
                rightIndex -=1;
            }

            if (leftIndex >= rightIndex) {
                break;
            } else {
                swap(leftIndex, rightIndex);
            }
        }

        swap(leftIndex, pivotPosition);
        return leftIndex;
    }

    function sort(leftIndex, rightIndex) {
        if (rightIndex - leftIndex <= 0) {
            return unorderedArray[leftIndex];
        }

        const pivotPosition = partition(leftIndex, rightIndex);
        
        if (kthLowestValue < pivotPosition) {
            return sort(leftIndex, pivotPosition - 1);
        } else if (kthLowestValue > pivotPosition) {
            return sort(pivotPosition + 1, rightIndex);
        } else {
            return unorderedArray[pivotPosition];
        }
    }

    return sort(0, unorderedArray.length - 1);
}
