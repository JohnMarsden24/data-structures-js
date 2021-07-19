/**
 * KMP search allows you to find a substring in a string within O(n + m)
 * Where n = string length and m = substring length
 * Brute force approach would be 0(n * m) as  c
 */

// const createTemplate = (str) => {
//   // Create pointers
//   let leftPointer = 0;
//   let rightPointer = 1;

//   // Create template array with initial 0
//   let template = [0];

//   // Needs to be a while loop as if there is a mismatch and leftPointer isn't 0 we move it
//   // decrement it and recheck comparassion
//   while (rightPointer < str.length) {
//     if (str[rightPointer] === str[leftPointer]) {
//       template.push(leftPointer + 1);
//       leftPointer++;
//       rightPointer++;
//       // There hasn't been a match but leftPointer isn't 0 so we reassign it to the previous value
//     } else if (leftPointer !== 0) {
//       leftPointer = template[leftPointer - 1];
//     } else {
//       template.push(0);
//       rightPointer++;
//     }
//   }
//   return template;
// };

// const kmpSearch = (str, match) => {
//   let strPointer = 0;
//   let matchPointer = 0;
//   let counter = 0;

//   const template = createTemplate(match);

//   while (strPointer < str.length) {
//     if (str[strPointer] === match[matchPointer]) {
//       // We've found a match.
//       if (matchPointer === match.length - 1) {
//         counter++;
//       }
//       matchPointer++;
//       strPointer++;
//     } else if (matchPointer > 0) {
//       matchPointer = template[matchPointer - 1];
//     } else {
//       matchPointer = 0;
//       strPointer++;
//     }
//   }

//   return counter ? counter : -1;
// };
// console.log(kmpSearch("abcadadadb", "adad"));

const createTemplate = (str) => {
  // Create pointers
  let leftPointer = 0;
  let rightPointer = 1;
  // Create template array
  let template = new Array(str.length).fill(0);

  // Iterate through str
  while (rightPointer < str.length) {
    // If right pointer matches left pointer increment both and put the left pointer
    // index + 1 in that index of the array
    if (str[leftPointer] === str[rightPointer]) {
      template[rightPointer] = leftPointer + 1;
      leftPointer++;
      rightPointer++;
    } else if (leftPointer > 0) {
      leftPointer = template[leftPointer - 1];
    } else {
      rightPointer++;
    }
  }

  return template;
};

const kmpSearch = (str, match) => {
  const template = createTemplate(match);

  // Create pointers
  let strPointer = 0;
  let matchPointer = 0;
  let counter = 0;
  // Iterate through str
  while (strPointer < str.length) {
    // If there's a match we increment both
    if (str[strPointer] === match[matchPointer]) {
      //   Check to see if match pointer is at the end, if it is we have a full match
      if (matchPointer === match.length - 1) {
        counter++;
        // if we want to return the first index of occuerence
        return strPointer - match.length + 1;
      }
      strPointer++;
      matchPointer++;
      // If it isn't a match we can go try and reset match pointer to previos known prefix
    } else if (matchPointer > 0) {
      matchPointer = template[matchPointer - 1];
    } else {
      // If the match pointer is at zero we just increment through the str
      strPointer++;
    }
  }
  return counter;
};
console.log(kmpSearch("abxabcabcaby", "abcaby"));
