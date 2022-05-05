function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = '#0000FF'	
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebeh.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultoh.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosoh.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            document.body.style.background = '#EE82EE'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultom.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}