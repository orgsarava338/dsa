# @orgsarava338/dsa
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target at index mid
        } else if (arr[mid] < target) {
            left = mid + 1; // Discard left half
        } else {
            right = mid - 1; // Discard right half
        }
    }

    return -1; // Target not found
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 13;
const resultIndex = binarySearch(arr, target);
if (resultIndex !== -1) {
    console.log(`Found ${target} at index ${resultIndex}`);
} else {
    console.log(`${target} not found in the array`);
}
