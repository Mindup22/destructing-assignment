function extractElements(arr) {
    // Use destructuring assignment to extract the first, second, and last elements
    const [first, second, ...rest] = arr;

    // Get the last element using array indexing or with the pop() method
    const last = rest.length > 0 ? rest[rest.length - 1] : arr.pop();

    // Return an array with the extracted values
    return [first, second, last];
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

const extractedElements = extractElements(numbers);

// Output the original array and the extracted elements
console.log("Original Array:", numbers);
console.log("Extracted Elements:", extractedElements);
