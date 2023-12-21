// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        console.log(flowerbed[i+1]);
        if(i==0){
            if(flowerbed[i]==0 && (flowerbed[i+1]==0 || flowerbed[i+1]==undefined) ){
                n=n-1
                flowerbed[i]=1
                console.log(flowerbed,n)
            }
        }
        else if(i==flowerbed.length-1){
             if(flowerbed[i-1]==0 && flowerbed[i]==0){
                n=n-1
                flowerbed[i]=1
                console.log(flowerbed,n)
            }
        }
        else if(flowerbed[i-1]==0 && flowerbed[i+1]==0 && flowerbed[i]==0){
            console.log("dizi: ",flowerbed[i],"n: ",i);
            n=n-1
            flowerbed[i]=1
            console.log(flowerbed,n)
        }
    }
    if(n<=0){
        return true
    }else{
        return false
    }
};

console.log(canPlaceFlowers([0],1))