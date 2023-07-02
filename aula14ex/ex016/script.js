function contar () {
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo == 0) {
        res.innerHTML = 'Impossível contar'

    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0) {
            window.alert('Passo Inválido, considerando passo 1')
            p= 1
        }
        if (i < f) {
            //Contagem Crescente
            for(let c= i; c <= f; c += p) {
                res.innerHTML+= ` ${c} \u{1F449}`
            }
                
        } else {
            //Contagem Regressiva
            for (let c= i; c >=f ;c-= p)
            res.innerHTML+= ` ${c} \u{1F449}`
        }
            res.innerHTML+= ` \u{1F3C1}`
    }
}