// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('PROMISE RESOLVED')
//     }, 3000)
// })

// promise1
//     .then((res) => console.log(res))
//     .then(() =>
//         setTimeout(() => {
//             console.log('P2')
//         }, 2000)
//     )
//     .then(() =>
//         setTimeout(() => {
//             console.log('P3')
//         }, 4000)
//     )
//     .then(() =>
//         setTimeout(() => {
//             console.log('P4')
//         }, 3000)
//     )


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('PROMISE RESOLVED')
//     }, 3000)
// })

// promise1
//     .then((res) => {
//         console.log(res);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('P2');
//             }, 2000);
//         });
//     })
//     .then((res) => {
//         console.log(res);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('P3');
//             }, 4000);
//         });
//     })
//     .then((res) => {
//         console.log(res);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('P4');
//             }, 3000);
//         });
//     })
//     .then((res) => {
//         console.log(res);
//     })

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('PROMISE RESOLVED')
    }, 3000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('PROMISE REJECTED')
    }, 3000)
})

function somethingSomething(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message)
            resolve('PROMISE RESOLVED', message)
        }, delay)
    })
}
function somethingSomethingRej(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message)
            reject('PROMISE REJECTED', message)
        }, delay)
    })
}

// promise1
//     .then((res) => console.log(res))
//     .catch((err) => console.log('ERROR', err))
//     .then(() => {
//         return somethingSomething('P2', 4000)
//     })
//     .catch((err) => console.log('ERROR', err))
//     .then(() => {
//         return somethingSomethingRej('P3', 3000)
//     })
//     .catch((err) => console.log('ERROR', err))
//     .then(() => {
//         return somethingSomething('P4', 1000)
//     })
//     .catch((err) => console.log('ERROR', err))

promise2
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .then(() =>
        setTimeout(() => {
            console.log('P2')
        }, 2000)
    )
    .catch((err) => console.log(err))
    .then(() =>
        setTimeout(() => {
            console.log('P3')
        }, 4000)
    )
    .catch((err) => console.log(err))
    .then(() =>
        setTimeout(() => {
            console.log('P4')
        }, 3000)
    )
    .catch((err) => console.log(err))