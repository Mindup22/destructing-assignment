const extractNameAndStreet = (person) => {
    // Destructuring the input object
    const { name, address: { street } } = person;
  
    // Creating a new object with extracted properties
    const extractedData = { name, street };
  
    return extractedData;
  };
  
  // Example usage with the provided object
  const person = {
    name: "Mindup",
    age: 23,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
  };
  
  const result = extractNameAndStreet(person);
  console.log(result);
  