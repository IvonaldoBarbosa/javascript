function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML =`Idade Calculada ${idade}` // testando
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade< 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-m.png')
                document.body.style.background = '#1717a8'
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
                document.body.style.background = '#1717a8'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
                document.body.style.background = '#1717a8'
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
                document.body.style.background = '#1717a8'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade< 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-f.png')
                document.body.style.background = '#a80505'
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
                document.body.style.background = '#a80505'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
                document.body.style.background = '#a80505'
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
                document.body.style.background = '#a80505'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos`
        res.appendChild(img)
    }
}