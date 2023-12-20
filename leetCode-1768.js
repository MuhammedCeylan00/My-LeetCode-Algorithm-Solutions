var mergeAlternately = function(word1, word2) {
    let mergeArray = [];
    let bestLengthArray = word1.length > word2.length ? word1.length : word2.length;
    for(let i =0; i<bestLengthArray; i++){
        if(word1[i]!=undefined){
            mergeArray.push(word1[i])
        }
        if(word2[i]!=undefined){
            mergeArray.push(word2[i])
        }
    }
    console.log(mergeArray.join(""))
};

mergeAlternately("abc","de");