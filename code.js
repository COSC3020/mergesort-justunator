function mergesort(arr){
    var tempL
    var tempR

    for(var size = 1; size < arr.length; size*=2){ //loop for the size of each split array
        //console.log(size, "arr size")
        for(var left = 0; left < arr.length; left+=size*2){ //figuring out where the left most index is for each array split
            var left2 = left+size
            //console.log(left, left2+size, "scope")
            for(var i = left; i < left2+size; i++){ // comparing every number from each split section
                for(var j = i; j < left2 + size; j++){
                    tempR = arr[j]
                    tempL = arr[i]
                    //console.log(i,j)
                    if(tempL > tempR){
                        //console.log(tempL, tempR, "swapped")
                        arr[i] = tempR
                        arr[j] = tempL
                        //console.log(arr)
                    }
                }
            }
        }
        //console.log(arr)
    }

    return arr;
}

//console.log(mergesort([4, 3, 8, 5, 9, 2, 5, 1, 7, 10, 8, 0, 3])) //debugging
// used https://www.geeksforgeeks.org/iterative-merge-sort/
// used https://stackoverflow.com/questions/46695942/iterative-in-place-mergesort

