# @orgsarava338/dsa
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // Last i elements are already in place, so we can reduce the inner loop
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", arrayToSort);
const sortedArray = bubbleSort(arrayToSort);
console.log("Sorted Array:", sortedArray);
