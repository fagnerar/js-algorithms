// Given an array, return the first repeated number.
// Given [ 1, 2 ,1, 3 ,4, 2], returns 1
// Given [ 1, 2 ,3, 3 ,2, 4, 5], returns 3
// Given [ 1, 2, 3], returns undefined

const firstRepeated = arr => {
    const values = {};
    
    for (let i = 0; i < arr.length; i++) {
        if ( values[arr[i]] ) return arr[i];
        
        values[arr[i]] = true;
    }
    
    return undefined;
}

const arr = [ 1, 2, 3 ];
console.log(firstRepeated(arr));