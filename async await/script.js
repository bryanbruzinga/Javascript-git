async function puxarDados() {
    try {
        const responseDados = await fetch('./dados.json')
        const jsonDados = await responseDados.json()
        document.body.innerText = jsonDados.aula
    } catch (erro) {
        console.log("fizeram cagada aí")
    }

}

puxarDados()

//await(await expressão).json() se quiser que duas ou mais expressões façam ao mesmo tempo 