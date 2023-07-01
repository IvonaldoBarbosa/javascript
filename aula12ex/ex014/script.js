function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 10

    msg.innerHTML = (`Agora são exatamente ${hora} horas e ${minuto} minutos`)
    if(hora >= 0 && hora < 12 ) {
        //Bom Dia
        img.src = 'manha.png'
        document.body.style.background = '#ddd496'
        
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#f28d6a'
        
    } else  {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#053862'
        
    }
}
