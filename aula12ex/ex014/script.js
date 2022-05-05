function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'Sem título2.png'
        document.body.style.background = '#fff178'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'sem título1.png'
        document.body.style.background = '#fb973f'
     } else {
         //BOA NOITE
         img.src = 'sem título3.png'
         document.body.style.background = '#654b70'
     }
}