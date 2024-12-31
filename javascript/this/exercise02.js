/*
    1. Create a database with get, set, scan key
       named "pet":
       { name: "Nemo", type: "fish", age: 2 }

*/

class Database {
    constructor() {
        this.items = {}
    }

    get(key) {
        return this.items[key];
    }

    set(key, value) {
        this.items[key] = value;
    }

    scan(searchKey) {
        // works as get
        if (!searchKey.endsWith('*')) return this.items[searchKey];

        // works as scan
        const arr = Object.entries(this.items).filter(([key, val]) => key.includes(searchKey.slice(0, -1)));
        return Object.fromEntries(arr);
    }
}

const db = new Database();
db.set('name', 'nhi')
db.set('namenn', 'nhinn')
db.set('age', 26);
const val = db.get('name');
console.log(val);
console.log(db);
const val2 = db.scan('name*');
console.log(val2);

