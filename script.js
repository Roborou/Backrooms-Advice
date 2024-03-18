// Import the file system module
const fs = require('fs');

// Read the JSON file
fs.readFile('backrooms Advice.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Access the data from the JSON object
        const adviceArray = jsonData;
        
        // Generate a random advice number
        const adviceNumber = Math.floor(Math.random() * adviceArray.length);
        
        // Print the randomly selected advice
        console.log(adviceArray[adviceNumber]);

    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});
