function removeDuplicates(arr) {
    // Use a Set to store unique elements
    const uniqueSet = new Set(arr);

    // Convert the Set back to an array and return
    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}

// Example usage
const numbers = [1, 2, 3, 4, 2, 5, 1, 6, 7, 8, 8, 9];

const uniqueNumbers = removeDuplicates(numbers);

// Output the array without duplicates
console.log("Original Array:", numbers);
console.log("Array without Duplicates:", uniqueNumbers);
