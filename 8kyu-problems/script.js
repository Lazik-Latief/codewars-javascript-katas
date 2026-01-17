// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function counting() {

  // Array containing boolean values (true / false)
  let array = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
  ];

  // Variable to store count of true values
  let count = 0;

  // Loop through the array
  // IMPORTANT: use i < array.length (not <=)
  for (let i = 0; i < array.length; i++) {

    // Check if the current element is true
    if (array[i] === true) {
      count++; // increase count if true is found
    }
  }

  // Print the total count of true values
  console.log(count);
}

// Call the function
counting();

// 2nd Problem:
// Function to convert a boolean value into a string
// Input: true or false
// Output: "true" or "false"

function booleanToString(b) {
  // String() converts any value to its string representation
  // true  -> "true"
  // false -> "false"
  return String(b);
}

// ---------------- TEST CASES ----------------

// Expected output: "true"
console.log(booleanToString(true));

// Expected output: "false"
console.log(booleanToString(false));


// 
/**
 * Converts a DNA string into RNA
 * DNA: G C A T
 * RNA: G C A U (T is replaced by U)
 *
 * @param {string} dna
 * @return {string}
 */
function DNAtoRNA(dna) {
  // Replace all occurrences of 'T' with 'U'
  return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA("GCAT")); // "GCAU"
console.log(DNAtoRNA("TTTT")); // "UUUU"
console.log(DNAtoRNA("GACCGCCGCC")); // "GACCGCCGCC"


function DNAtoRNA(dna) {
  let result = "";

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      result += "U";
    } else {
      result += dna[i];
    }
  }

  return result;
}

/*
=====================================================
Codewars Task: Maximum and Minimum
=====================================================

TASK:
-----
Create two functions:
1. max() → returns the largest number in the array
2. min() → returns the smallest number in the array

Each function:
- Takes an array of integers as input
- Returns ONE number
*/


// Function to find the maximum number
function max(numbers) {

    // Assume the first number is the largest
    let maxValue = numbers[0];

    // Loop through the array
    for (let i = 1; i < numbers.length; i++) {

        // If current number is greater, update maxValue
        if (numbers[i] > maxValue) {
            maxValue = numbers[i];
        }
    }

    // Return the largest number
    return maxValue;
}


// Function to find the minimum number
function min(numbers) {

    // Assume the first number is the smallest
    let minValue = numbers[0];

    // Loop through the array
    for (let i = 1; i < numbers.length; i++) {

        // If current number is smaller, update minValue
        if (numbers[i] < minValue) {
            minValue = numbers[i];
        }
    }

    // Return the smallest number
    return minValue;
}


/*
=====================================================
EXAMPLES
=====================================================
*/

console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); // 566
console.log(min([4, 6, 2, 1, 9, 63, -134, 566])); // -134



