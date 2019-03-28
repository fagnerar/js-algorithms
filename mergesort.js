function mergeSort(ar) {
    if (ar.length === 1) return ar;

    let half;

    if (ar.length % 2 === 0) 
        half = ar.length / 2;
    else 
        half = Math.floor(ar.length / 2) + 1;

    const left = ar.slice(0, half);
    const right = ar.slice(half);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let ar = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            ar.push(left[i]);
            i++;
        } else {
            ar.push(right[j]);
            j++;
        }
    }

    if (i === left.length) 
        ar = ar.concat(right.slice(j));
    else 
        ar = ar.concat(left.slice(i));

    return ar;
}

// const left = [-1, -1, 2, 99];
// const right = [-44, 0, 297];
// console.log(merge(left, right));

const numbers = [2, 99, -1, -1, 297, 0, -44];
console.log(mergeSort(numbers));