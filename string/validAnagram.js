function isAnagram (s, t){
    if(s.length !== t.length) return false
    let obj1 = {}
    let obj2 = {}

    for(let i = 0; i < s.length; i++){
      obj1[s[i]] = (obj1[s[i]] === undefined) ? 1 : obj1[s[i]] + 1;
      obj2[t[i]] = (obj2[t[i]] === undefined) ? 1 : obj2[t[i]] + 1;
    }

    for(const key in obj1){
     if(obj1[key] !== obj2[key]) return false
    }
    return true
 }
console.log(isAnagram1("anagram", "nagaram"));

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// Normalize the strings to a consistent Unicode form
// s = s.normalize("NFC");
// t = t.normalize("NFC");

console.log(isAnagram("déjà vu", "vu déjà")); // true
console.log(isAnagram("hello", "olleh"));      // true
console.log(isAnagram("こんにちは", "はんこんにち")); // false

