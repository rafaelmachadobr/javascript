function Clicar() {
    var num = window.document.getElementById('numb')
    var res = window.document.getElementById('res')
    var val = String(num.value)
    var dois = val * 2
    var tres = val * 3
    var cinco = val * 5
    var rq = val ** (1/2)
    res.innerText = `O dobro de ${val} vale ${dois}.
    O triplo de ${val} vale ${tres}.
    O quintuplo de ${val} vale ${cinco}
    A raiz quadrada de ${val} é igual a ${rq}.`
}