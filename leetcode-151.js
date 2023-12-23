var reverseWords = function(s) {
    var cleanString = s.trim().replace(/\s+/g, ' ');
    var myArray = cleanString.split(" ")
    var result = "";
    for (let index = myArray.length-1; index >=0; index--) {
        let element = myArray[index];
        if(index==0){
            result =   result + element
        }else{
            result =   result + element + " "
        }
    }
    return result
};

console.log(reverseWords("   hello world  "))