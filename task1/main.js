function printOwnProp(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

// for instance
const obj = {
    name: 'Alexsandra',
    age: 15,
    city: 'Moscow'
};

printOwnProp(obj);