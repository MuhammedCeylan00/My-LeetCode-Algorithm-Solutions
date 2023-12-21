// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"


var reverseVowels = function (s) {
    let left = 0;
    let right = s.length - 1;
    var vowels = ["a","A","e","E","i","I","o","O","u","U"];
    let autput = s.split("");

    for (let i = 0; i < s.length; i++) {
       // console.log(s[left],s[right])
        if (vowels.includes(s[left]) && vowels.includes(s[right])) {
            autput[left] = s[right]
            autput[right] = s[left]
            console.log(s[left],s[right])
            if((left+1)==right || left>right){
                break
            }
            left++
            right--
        }else if(vowels.includes(s[left]) && !vowels.includes(s[right])){
            right--
        }else if(!vowels.includes(s[left]) && vowels.includes(s[right])){
            left++
        }else{
            left++
            right--
        }
    }
    return autput.join("")
};

console.log(reverseVowels(" apG0i4maAs::sA0m4i0Gp0"))

