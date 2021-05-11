// Quick Question #1
new Set([1,1,2,2,3,4]) // {1,2,3,4}.

// Quick Question #2
const spreadSet = [...new Set("referee")].join("") // 'ref'.

// Quick Question #3
let m = new Map();
m.set([1,2,3], true); // 'true'.
m.set([1,2,3], false); // 'false'.

// hasDuplicate
hasDuplicate([1,3,2,1]) // true
const  hasDuplicate = (arr) => new Set (arr).size !== arr.legnth

// vowelCount
//Write a function called vowelCount which accepts a string and returns 
// a map where the keys are numbers and the values are the count of the vowels in the string.
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }


function vowelCount(str) {
    let strMap = new Map();
    const vowels = "aeiou";
    strMap.map(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }



  function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }