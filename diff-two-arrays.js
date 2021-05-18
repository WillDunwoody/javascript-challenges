/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.*/

function diffArray(arr1, arr2) {
    let endArray = [] 
    arr1.concat(arr2)
    console.log(arr1)
    /*for(let i = 0; i < newArray.length; i++) {
        if(!arr1.includes(newArray[i]) || !arr2.includes(newArray[i])) {
            endArray.push(newArray[i])
        }
    }*/
    console.log(endArray)

}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])