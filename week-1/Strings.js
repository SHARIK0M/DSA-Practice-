Strings Methods

let str = " SHARIK Boy"

console.log(str.at(1))

console.log(str.charAt(1))

console.log(str.charCodeAt(1))

console.log(str.slice(0,1))
console.log(str.substring(0,1))// substring() automatically swaps values if start > end

console.log(str.slice(-5));         // "WORLD" ✅ navigate
console.log(str.substring(-5));     // "HELLO WORLD" ❌ (treats -5 as 0)


str.toLowerCase() // is return type 
str.toUpperCase()

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.padStart(10,"SS"));
console.log(str.padEnd(10,"00"));


console.log(str.repeat(2))


console.log(str.replace("S","s"));
console.log(str.replaceAll("S","s"));

let word = str.split(" ");
console.log("hiiidjuidhfoi",word)
 console.log("hiiiiiiiii",word.join(", "))

console.log(str.indexOf(" "))
console.log(str.lastIndexOf(" "))


console.log(str.search(/HARIK/)) //  Finds the index of the first match of a regex pattern in a string.
console.log(str.match(/A/g)) // Retrieves the actual match or matches (as strings) from the original string.

console.log(str.includes("S"))
console.log(str.startsWith(" S"))
console.log(str.endsWith("S"))

console.log(str)



 SEE IN MATH METHOD IN PDF ------------------------------------------- 


------------------------------------------------------------------------------------------------------------


str = "Sharik Basha"

console.log(str.split("").reverse().join(''))

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString(str)); // Output: "olleh"

--------------------------------------------------------------------------------------------------------


Check Palindrome

function isPalindrome(str) {
    // Convert to lowercase and remove spaces (optional)
    str = str.toLowerCase().replace(/\s+/g, '');

    // Reverse the string
    let reversed = str.split('').reverse().join('');

    // Compare original and reversed
    return str === reversed;
}

Test
console.log(isPalindrome("madam"));    // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("RaceCar"));  // true


function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s+/g, '');
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Test
console.log(isPalindrome("noon"));     // true
console.log(isPalindrome("world"));    // false


--------------------------------------------------------------------------------------------------------

Count Vowels and Consonants

function countVowelsAndConsonants(str) {
    let vowels = 'aeiouAEIOU';
    let vCount = 0;
    let cCount = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            if (vowels.includes(ch)) {
                vCount++;
            } else {
                cCount++;
            }
        }
    }

    console.log(`Vowels: ${vCount}, Consonants: ${cCount}`);
}

countVowelsAndConsonants("Hello World");

--------------------------------------------------------------------------------------------------------

find dupulicate 

str = "Sharikk Bashai"

let seen = {}

for( val of str){
    let c = 1
    if(!seen[val]){
       seen[val]=c
    }else{
        c++
        seen[val]=c
    }
}
let dupulicat = ""

for(key in seen){
    if(seen[key]>1){
        dupulicat+=key+" "
    }
}

console.log(dupulicat)

--------------------------------------------------------------------------------------------------------


function toggleCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch === ch.toUpperCase()) {
            result += ch.toLowerCase();
        } else {
            result += ch.toUpperCase();
        }
    }

    return result;
}

// Test the function
console.log(toggleCase("HeLLo")); // Output: "hEllO"
console.log(toggleCase("ShArIk")); // Output: "sHaRiK"

--------------------------------------------------------------------------------------------------------


function removeDuplicates(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (!result.includes(ch)) {
            result += ch;
        }
    }

    return result;
}

console.log(removeDuplicates("aabbccddeea")); // Output: "abcde"


--------------------------------------------------------------------------------------------------------

function isAnagram(str1, str2) {
    let s1 = str1.replace(/\s/g, '').toLowerCase();
    let s2 = str2.replace(/\s/g, '').toLowerCase();

    if (s1.length !== s2.length) return false;

    return s1.split('').sort().join('') === s2.split('').sort().join('');
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

--------------------------------------------------------------------------------------------------------


count Character

let c = {}
let str = 'sharikshfjsfa'

for(val of str){
    if(val == ' ') continue
    
   c[val] = (c[val] || 0)+1
}

console.log(c)

--------------------------------------------------------------------------------------------------------


function replaceSpaces(str) {
    return str.replace(/ /g, "_");
}

console.log(replaceSpaces("hello world")); // "hello_world"
console.log(replaceSpaces("DSA is fun"));  // "DSA_is_fun"


--------------------------------------------------------------------------------------------------------


Longest Common Prefix

let arr =["fower", "flow", "flight"]

first = arr[0]
last = arr[arr.length-1]

let prefix=""

for(let i=0;i<first.length ;i++){
    if(first.at(i)===last.at(i)){
        prefix+=first[i]
    }else{
        break
    }
}

console.log(prefix)

--------------------------------------------------------------------------------------------------------


let s1 = "ABCD";
let s2 = "CDAB";

let doubleS1 = s1 + s1; // "ABCDABCD"

console.log(doubleS1.includes(s2)); // true ✅

--------------------------------------------------------------------------------------------------------
