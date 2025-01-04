// promises

const promise = new Promise((resolve, reject) => {

    const allWentWell = false;

    if (allWentWell) {
        resolve("All things went well")
    }
    else {
        reject("oops something went wrong")
    }
})

console.log(promise)

const promise1 = new Promise((resolve, reject) => {

    const randomNumber = Math.floor(Math.random() * 10);

    setTimeout(() => {
        if (randomNumber < 4) {
            resolve(`Well Done You guessed Right! `)
        }
        else {
            reject(`You guessed wrong Unlucky `)
        }
    }, 2000);
})

promise.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error8)
})

console.log(promise);


const promiseone = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise one resolved")
    }, 2000);
});


const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise two rejected ")
    }, 1500);
})


Promise.all([promiseone, promiseTwo])
    .then((data) => console.log(data[0], data[1]))
    .catch((error) => console.log(error))
