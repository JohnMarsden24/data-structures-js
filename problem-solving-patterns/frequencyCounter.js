/*
// Uses a lookup object to find matching values
// 0(n) time complexity
*/

/*
// Create a function which checks if the numbers in the first array have their corresponding squared value in the second array
*/
const isNumberSquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false

  const squareLookup = {}

  // Create the square lookup obj
  arr1.forEach(num => {
    const squaredNum = Math.pow(num, 2)
    squareLookup[squaredNum]
      ? squareLookup[squaredNum]++
      : (squareLookup[squaredNum] = 1)
  })

  const originalLookup = {}

  // Create the original lookup obj
  arr2.forEach(num => {
    originalLookup[num] ? originalLookup[num]++ : (originalLookup[num] = 1)
  })

  // Loop through the lookup and check if all values are present
  for (const num in originalLookup) {
    if (originalLookup[num] !== squareLookup[num]) return false
  }

  return true
}

const isNumberSquaredArr1 = [2, 3, 4, 5, 2]
const isNumberSquaredArr2 = [4, 9, 16, 4, 25]

const isNumberSquaredResult = isNumberSquared(
  isNumberSquaredArr1,
  isNumberSquaredArr2
)

// console.log(isNumberSquaredResult)

/*
// Create a function which checks if a word is an anagram
*/
const isAnagram = (word1, word2) => {
  if (word1.length !== word2.length) return false

  const lookup = {}

  // Create the word lookup obj
  word1.split("").forEach(letter => {
    lookup[letter] = (lookup[letter] || 0) + 1
  })

  // Loop through word2 and if the letter is not present in the lookup obj we know the words can't be an anagram
  for (let i = 0; i < word2.length; i++) {
    const letter = word2[i]
    if (!lookup[letter]) {
      return false
    }

    lookup[letter]--
  }

  return true
}

const isAnagramWord1 = "shortabcac"
const isAnagramWord2 = "hortscbaca"

const isAnagramResult = isAnagram(isAnagramWord1, isAnagramWord2)

// console.log(isAnagramResult)

/*
// Write a function that given two positive integers, find out if the two numbers have the same frequency of digits
*/

const sameFrequency = (num1, num2) => {
  // Convert numbers to strings so we can iterate them
  const num1Arr = num1.toString().split("")
  const num2Arr = num2.toString().split("")

  // Short circuit if the lengths aren't the same they can't have the same frequence
  if (num1Arr.length !== num2Arr.length) return false

  // Create a lookup for one or both numbers
  const num1Lookup = num1Arr.reduce((prev, curr) => {
    prev[curr] = prev[curr] + 1 || 1
    return prev
  }, {})

  // Loop through one lookup or num and check to see if the values in the other nums lookup equal
  for (let i = 0; i < num2Arr.length; i++) {
    const num = num2Arr[i]
    if (!num1Lookup[num]) {
      return false
    }

    num1Lookup[num]--
  }

  return true
}

const sameFrequencyNum1 = 3589578
const sameFrequencyNum2 = 5879385

const sameFrequencyResult = sameFrequency(sameFrequencyNum1, sameFrequencyNum2)

// console.log(sameFrequencyResult)

/*
// Write a function that given N number of arguments, see if any of those arguments are duplicates
*/

const areThereDuplicates = (...args) => {
  const lookup = {}

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    // If the lookup already contains the arg key it must be a duplicate
    if (lookup[arg]) {
      return true
    }
    lookup[arg] = 1
  }

  return false

  // Provided solution
  // Frequency counter
  // let collection = {}
  // for(let val in arguments){
  //   collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  // }
  // for(let key in collection){
  //   if(collection[key] > 1) return true
  // }
  // return false;

  // Two pointers
  // args.sort((a,b) => a > b);
  // let start = 0;
  // let next = 1;
  // while(next < args.length){
  //   if(args[start] === args[next]){
  //       return true
  //   }
  //   start++
  //   next++
  // }
  // return false
}

const areThereDuplicatesResponse = areThereDuplicates(1, 2, 3, 4, 1)

console.log(areThereDuplicatesResponse)
