function heavyWork() {
    let executions = 0
    for (let i = 0; i < 1000000000; i++) {
        executions++
    }
    return executions
}

const promiseWithParams = (login, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado como ${login}`)
        }, 3000)
    })
}

const promise = new Promise((resolve, reject) => {

    promiseWithParams("Gian", "123")
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(`Erro tentando logar com: ${error}`)
    })

    try {
        let executions = 0 
        for (let i = 0; i < 1000000000; i++) {
            executions++
        }
        resolve(executions)
    }
    catch (error) {
        reject(error)
    }
})

async function main() {

console.log("Inicio")
// console.log(heavyWork())
await promise.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})
console.log("Fim")
}