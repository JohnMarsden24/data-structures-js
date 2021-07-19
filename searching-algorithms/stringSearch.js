const stringSearch = (str, match) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < match.length; j++) {
      if (str[j + i] !== match[j]) break;
      if (j === match.length - 1) counter++;
    }
  }

  return counter;
};

console.log(stringSearch("wozooomgb oolomgloomgk", "omg"));
