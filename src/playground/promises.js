// ..import this in app .js:  import './playground/promises'

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Deep',
            age: 24
        });
        // reject('something went wrong');
    }, 5000);
})

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return 'I m in 1st then'
}).then((str) => {
    console.log('2 returned from prev then: ', str);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is Another Promise');
        }, 5000);
    })
}).then((data) => {
    console.log('3 does 2nd then resolved? : ', data);
}).catch((err) => {
    console.log('error: ', err)
})

console.log('after');
