function swapValues(x, y) {
    // Use destructuring assignment with an array to swap values
    [x, y] = [y, x];

    // Return an array with the swapped values
    return [x, y];
}

// Example usage
let a = 5;
let b = 10;

const swappedValues = swapValues(a, b);

// Output the original values and the swapped values
console.log("Original values: a =", a, ", b =", b);
console.log("Swapped values: a =", swappedValues[0], ", b =", swappedValues[1]);
