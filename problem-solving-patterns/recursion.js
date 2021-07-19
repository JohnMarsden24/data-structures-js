/**
 * Write a function called power which accepts a base and an exponent
 * The function should return the power of the base to the exponent
 * This function should mimic the functionality of Math.pow()
 * do not worry about negative bases and exponents.
 */

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// console.log(power(3, 3));

/**
 * Write a function factorial which accepts a number and returns the factorial of that number
 * A factorial is the product of an integer and all the integers below it
 * e.g., factorial four (4!)  ) is equal to 24, because 4 * 3 * 2 * 1 equals 24
 * factorial zero (0!) is always 1.
 */

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(4));

/**
 * Write a function called productOfArray which takes in an array of numbers and returns
 * the product of them all
 */

function productOfArray(arr) {
  const total = arr[0];
  if (arr.length === 1) return total;
  return total * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3, 10]));

/**
 * Write a function called recursiveRange which accepts a number and adds up all the
 * numbers from 0 to the number passed to the function
 */

function recursiveRange(num) {
  if (num < 1) return 0;
  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(6));

/**
 * Write a recursive function called fib which accepts a number and returns the nth
 * number in the Fibonacci sequence. Recall that the Fibonacci sequence is the
 * sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
 * and where every number thereafter is equal to the sum of the previous two numbers
 */

function fib(num, arr = [1, 1]) {
  //  Num reflects what index we want to retrieve
  // If the array length is equal to num we return the number at its index
  //   if (arr.length === num) return arr[num - 1];
  //   // If the arrays length is less than the num we add the two previous values
  //   const newNum = arr[arr.length - 1] + arr[arr.length - 2];
  //   // we call fib again concatting the original arr with the new number
  //   return fib(num, [...arr, newNum]);

  if (num <= 0) return 0;
  else if (num === 1) return 1;

  // summing the previous two numbers in the sequence
  return fib(num - 1) + fib(num - 2);
}

// console.log(fib(10));

/**
 * Write a recursive function called reverse which accepts a string
 * and returns a new string in reverse.
 */

function reverse(str) {
  if (str === "") {
    return str;
  }
  // Convert string to array
  let chars = str.split("");

  // Remove last char from the array
  let lastChar = chars.pop();

  // Add the last char to the remainder of the str
  return lastChar + reverse(chars.join(""));

  // Other solution
  //   if (str.length <= 1) return str;
  //   return reverse(str.slice(1)) + str[0];
}

// console.log(reverse("awesome"));

/**
 * Write a recursive function called isPalindrome which returns true if
 * the string passed to it is a palindrome (reads the same forward and backward)
 * Otherwise it returns false.
 */

function isPalindrome(str) {
  //   function reverse(str) {
  //     if (str === "") return str;
  //     return str[str.length - 1] + reverse(str.slice(0, -1));
  //   }

  //   return str === reverse(str);

  if (str.length === 1 || str.length === 0) {
    return true;
  }

  return (
    str[0] === str.slice(-1) && isPalindrome(str.substring(1, str.length - 1))
  );
}

// console.log(isPalindrome("tacocat"));

/**
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the
 * callback. Otherwise it returns false.
 */

function someRecursive(arr, cb) {
  if (cb(arr[0])) {
    return true;
  } else if (arr.length > 1) {
    return someRecursive(arr.slice(1), cb);
  } else {
    return false;
  }
}

const isOdd = (val) => val % 2 !== 0;

// console.log(someRecursive([2, 2, 9, 20], isOdd));

/**
 * Write a recursive function called flatten which accepts an array of arrays and
 * returns a new array with all values flattened.
 */

function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length) return arr;
  // If the current item is an array we spread it out with the remainder of the array
  if (Array.isArray(arr[0])) {
    return flatten([...arr[0], ...arr.slice(1)]);
  } else {
    // As flatten always returns an array we spread it out as well
    return [arr[0], ...flatten(arr.slice(1))];
  }
}

// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

/**
 * Write a recursive function called capitalizeFirst. Given an array of strings,
 * capitalize the first letter of each string in the array
 */

function capitalizeFirst(arr) {
  if (!arr.length) return arr;
  const capitalized = `${arr[0][0].toUpperCase()}${arr[0].substring(1)}`;
  return [capitalized, ...capitalizeFirst(arr.slice(1))];
}

// console.log(capitalizeFirst(["cat", "taco", "bread"]));

/**
 * Write a recursive function called nestedEvenSum. Return the sum of all
 * even numbers in an object which may contain nested objects.
 */

function nestedEvenSum(obj) {
  // Extract the values
  const objValues = Object.values(obj);

  // Create initial empty array to store our even nums
  const evenNums = [];
  let total = 0;

  // Recursive helper function
  const flatten = (values) => {
    //   If the input array is empty we simply return the input
    if (!values.length) return values;
    // If the current value is an object we call flatten again
    // with all the values from the current object along
    // with the remainder of the input array
    if (typeof values[0] === "object" && values[0] !== null) {
      flatten(Object.values(values[0]));
    }
    // If the current value is a number and even we add it to our evenNums array
    if (typeof values[0] === "number" && values[0] % 2 === 0) {
      total += values[0];
    }
    // We recursively call flatten
    flatten(values.slice(1));
  };

  flatten(objValues);
  return total;
  //   return evenNums.reduce((prev, curr) => (prev += curr), 0);
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// console.log(nestedEvenSum(obj2));

/**
 * Write a recursive function called capitalizeWords. Given an array of words,
 * return a new array containing each word capitalized.
 */

function capitalizeWords(arr) {
  if (!arr.length) return arr;
  // add whatever parameters you deem necessary - good luck!
  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}

// console.log(capitalizeWords(["i", "am", "learning", "recursion"]));

/**
 * Write a recursive function called stringifyNumbers which takes in an object
 * and finds all of the values which are numbers and converts them to strings.
 * Recursion would be a great way to solve this!
 */

function stringifyNumbers(obj) {
  const newObj = {};

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;

  // No Loop solution
  // if (!Object.keys(obj).length) return {};

  // const key = Object.keys(obj)[0];
  // const { [key]: val, ...left } = obj;

  // if (Number.isInteger(val)) {
  //   obj[key] = String(val);
  // } else if (typeof val === 'object') {
  //   obj[key] = stringifyNumbers(val);
  // }

  // return {
  //   ...obj,
  //   ...stringifyNumbers(left),
  // };
}

const stringifyNumbersObj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

// console.log(stringifyNumbers(obj));

/**
 * Write a recursive function called collectStrings which accepts
 * an object and returns an array of all the values in the object
 * that have a typeof string
 */

function collectStrings(obj, results = []) {
  //   let results = [];

  //   for (const key in obj) {
  //     if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
  //       results = [...results, ...collectStrings(obj[key])];
  //     }

  //     if (typeof obj[key] === "string") {
  //       results.push(obj[key]);
  //     }
  //   }

  //   return results;

  // No Loop solution
  if (typeof obj === "string") return [obj];
  return Object.values(obj).reduce(
    (arr, v) => [...arr, ...collectStrings(v)],
    []
  );
}

const collectStringObj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(collectStringObj));
