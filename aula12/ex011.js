var idade = 34
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade >= 16 && idade < 18 || idade > 65) { //Não precisa de "idade >= 16 &&" só acumula espaço...
        console.log('O seu voto é opcional')
} else if (idade >= 18) { //Não precisa de "if (idade >= 18)" só acumula espaço...
    console.log('O seu voto é obrigratorio')
}
