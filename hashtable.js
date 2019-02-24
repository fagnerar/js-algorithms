// Create a hashtable using arrays only.

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data[address];
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

const hashTable = new HashTable(5);

hashTable.set('hobbit', 5);
hashTable.set('elf', 4);
hashTable.set('dwarf', 3);
hashTable.set('human', 2);
hashTable.set('wizard', 1);

console.log(hashTable.get('wizard'));
console.log(hashTable.get('human'));
console.log(hashTable.get('dwarf'));
console.log(hashTable.get('elf'));
console.log(hashTable.get('hobbit'));