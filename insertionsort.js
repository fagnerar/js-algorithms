const numbers = [2, 99, -1, -1, 297, 0, -44];
// sorted: [ -44, -1, -1, 0, 2, 99, 297 ]

function insertionSort(ar) {
    for (let i = 0; i < ar.length - 1; i++) {
        let j = i + 1;

        while (j >= 1 && ar[j-1] > ar[j]) {
            const aux = ar[j];
            ar[j] = ar[j-1];
            ar[j-1] = aux;

            j--;
        }
    }

    return ar;
}


console.log(insertionSort(numbers));