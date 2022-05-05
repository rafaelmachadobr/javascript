function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos e ${sec} segundos`
    if (hora >= 0 && hora <= 12) {
        //Bom dia
        img.src = 'Sem título2.png'
        document.body.style.background = '#fff178'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'Sem título1.png'
        document.body.style.background = '#fb973f'
    } else {
         //Boa noite
          img.src = 'Sem título3.png'        
         document.body.style.background = '#654b70'
    }
}