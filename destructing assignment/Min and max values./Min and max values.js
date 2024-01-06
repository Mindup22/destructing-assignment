function findMaxAndMin(arr) {
    // Use spread operator with Math.max() and Math.min() to find max and min values
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    // Return an object with max and min properties
    return { max, min };
}

// Example usage
const numbers = [5, 2, 7, 1, 9];

const result = findMaxAndMin(numbers);

// Output the original array and the max and min values
console.log("Original Array:", numbers);
console.log("Max and Min Values:", result);
