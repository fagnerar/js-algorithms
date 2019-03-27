const numbers = [99, -99, 2, 66, -1, 2, 283, 0, -44];

function selectionSort(ar) {
    for (let i = 0; i < ar.length; i++) {
        let min = i;

        for (let j = i + 1; j < ar.length; j++) {
            if (ar[j] < ar[min]) min = j;
        }

        const aux = ar[i];
        ar[i] = ar[min];
        ar[min] = aux;
    }

    return ar;
}

console.log(selectionSort(numbers));