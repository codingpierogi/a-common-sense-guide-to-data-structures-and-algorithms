export function binarySearch(orderedArray, searchValue) {
    let lowerBound = 0,
        upperBound = orderedArray.length - 1;

    while (lowerBound < upperBound) {
        const midpoint = Math.floor((lowerBound + upperBound) / 2);
        const midpointValue = orderedArray[midpoint];

        if (searchValue === midpointValue) {
            return midpointValue;
        } else if (searchValue < midpointValue) {
            upperBound = midpoint - 1;
        } else {
            lowerBound = midpoint + 1;
        }
    }

    return -1;
}
