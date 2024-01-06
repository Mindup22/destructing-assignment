function wordCount(str) {
    // Split the string into words
    const words = str.split(/\s+/);

    // Create a Map to store word counts
    const wordMap = new Map();

    // Count occurrences of each word
    words.forEach(word => {
        // Convert the word to lowercase to ensure case-insensitivity
        const lowercaseWord = word.toLowerCase();

        // Increment the count for the word in the Map
        wordMap.set(lowercaseWord, (wordMap.get(lowercaseWord) || 0) + 1);
    });

    return wordMap;
}

// Example usage
const text = "This is a sample text. This text contains sample words.";

const result = wordCount(text);

// Output the word count
result.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});
