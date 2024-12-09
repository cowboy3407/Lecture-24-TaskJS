//1
function Outcome(Random) {
    const delay = Math.floor(Math.random() * 2000) + 1000;
    const isResolved = Math.random() <= 0.5;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isResolved) {
                resolve(`${Random} Promise resolved`);
            } else {
                reject(`${Random} Promise rejected.`);
            }
        }, delay);
    });
}

Outcome('random')
    .then(result => console.log(result))
    .catch(error => console.error(error));


//2

function promisedDelay() {
    const delay = Math.random() * 3000;
    return new Promise(resolve => setTimeout(() => resolve('First Promise'), delay));
}

function promisedDelay1() {
    const delay = Math.random() * 3000;
    return new Promise(resolve => setTimeout(() => resolve('Second Promise'), delay));
}

function promisedDelay2() {
    const delay = Math.random() * 3000;
    return new Promise(resolve => setTimeout(() => resolve('Third Promise'), delay));
}

Promise.all([promisedDelay(), promisedDelay1(), promisedDelay2()])
    .then(result => { console.log(result); })
    .catch(error => { console.log(error); })


//3

function firstRacer(racer1) {
    const delay = Math.random() * 2700;
    return new Promise(resolve => setTimeout(() => resolve(`${racer1} WHO FINISHED THE RACE FIRST`), delay));
}

function secondRacer(underdog) {
    const delay = Math.random() * 3000;
    return new Promise(resolve => setTimeout(() => resolve(`${underdog} WHO FINISHED THE RACE FIRST`), delay));
}

Promise.race([firstRacer('NUMBER 10 FAVORITE'), secondRacer('NUMBER 77 UNDERDOG')])
    .then(result => console.log("AND THE WINNER IS:", result))
    .catch(error => console.log(error));

//4

function mixedPromise() {
    const delay = Math.random() * 4000;
    return new Promise((resolve, reject) => setTimeout(() => {
        const isResolved = Math.random() <= 0.5;
        if (isResolved) {
            resolve('First Promise resolved');
        } else {
            reject('First Promise failed');
        }
    }, delay));
}

function mixedPromise1() {
    const delay = Math.random() * 4000;
    return new Promise((resolve, reject) => setTimeout(() => {
        const isResolved = Math.random() <= 0.5;
        if (isResolved) {
            resolve('Second Promise resolved');
        } else {
            reject('Second Promise failed');
        }
    }, delay));
}

function mixedPromise2() {
    const delay = Math.random() * 4000;
    return new Promise((resolve, reject) => setTimeout(() => {
        const isResolved = Math.random() <= 0.5;
        if (isResolved) {
            resolve('Third Promise resolved');
        } else {
            reject('Third Promise failed');
        }
    }, delay));
}

function mixedPromise3() {
    const delay = Math.random() * 4000;
    return new Promise((resolve, reject) => setTimeout(() => {
        const isResolved = Math.random() <= 0.5;
        if (isResolved) {
            resolve('Fourth Promise resolved');
        } else {
            reject('Fourth Promise failed');
        }
    }, delay));
}

function mixedPromise4() {
    const delay = Math.random() * 4000;
    return new Promise((resolve, reject) => setTimeout(() => {
        const isResolved = Math.random() <= 0.5;
        if (isResolved) {
            resolve('Fifth Promise resolved');
        } else {
            reject('Fifth Promise failed');
        }
    }, delay));
}

Promise.allSettled([mixedPromise(), mixedPromise1(), mixedPromise2(), mixedPromise3(), mixedPromise4()])
    .then(results => {
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log(result.value);
            } else {
                console.log(result.reason);
            }
        });
    });