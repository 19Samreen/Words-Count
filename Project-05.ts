#!/usr/bin/env node

//Words Counter

import inquirer from 'inquirer';

async function wordCounter() {
    // Ask the user to enter a sentence or text
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter a sentence or text:',
        }
    ]);

    const { text } = answers;

    // Count the words in the entered text
    const wordCount = countWords(text);
    console.log(`The entered text has ${wordCount} words.`);
}

function countWords(text: string): number {
    // Trim the text to remove extra spaces from the start and end
    // Split the text by spaces to get an array of words
    // Filter out any empty strings and count the number of words
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

// Start the word counter function
wordCounter();