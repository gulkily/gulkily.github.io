for (let i = 1; i <= 100; i++) {
  let output = "";

  if (i % 3 === 0) {
    output += "fizz";
  }

  if (i % 5 === 0) {
    output += "buzz";
  }

  console.log(output || i); // Output "fizz", "buzz", "fizzbuzz", or the number itself
}

// How to run:
// node fizzbuzz.js
