const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(ar) {
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;

        for (let i = 0; i < ar.length - 1; i++) {
            if (ar[i] > ar[i + 1]) {
                const aux = ar[i];
                ar[i] = ar[i + 1];
                ar[i + 1] = aux;

                isSorted = false;
            }
        }
    }

    return ar;
}

console.log(bubbleSort(numbers));