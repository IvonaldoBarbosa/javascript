function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var res = window.document.getElementById('res')
    
    msg.innerHTML = (`Agora são exatamente ${hora} horas e ${minuto} minutos`)
    if(hora >= 5 && hora < 12 ) {
        //Bom Dia
        img.src = 'manha.png'
        document.body.style.background = '#ddd496'
        res.innerHTML = 'Bom Dia!'
        
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#f28d6a'
        res.innerHTML = 'Boa Tarde!'
        
    } else  if (hora >= 18 && hora <= 23) {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#053862'
        res.innerHTML = 'Boa Noite!'
        
    } else {
        //Boa Madrugada
        img.src = 'noite.png'
        document.body.style.background = '#053862'
        res.innerHTML = 'Boa Madrugada!'
    }
}
