async function minhaFuncaoAssincrona() {
    return 'Olá sou eu assincrona'
}

const resultado = minhaFuncaoAssincrona()
    .then((resultadso) => {
        console.log(resultadso)
    })

async function buscarDados(){
    const resultado = await fetch('http://jsonplaceholder.typicode.com/posts/1') //fecth retorna promises
    if (resultado.ok){
        const json = await resultado.json()
        console.log(json) //retorna json
    } else {
        throw new Error('Deu erro')

    }
}
buscarDados()