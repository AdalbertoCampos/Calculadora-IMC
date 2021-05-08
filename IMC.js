function resultado() {
    var peso = document.getElementsByTagName('input')[0].value
    var altura = document.getElementsByTagName('input')[1].value
    var botao = document.getElementsByTagName('input')[2]
    var calc = peso / (altura * altura)
    var res = calc.toFixed(1)
    var show1 = document.getElementsByTagName('div')[0]
    var show2 = document.getElementsByTagName('div')[1]
    show1.innerHTML = `Seu IMC é igual a ${res}`
    if (res < 18.5) {
        show2.innerHTML = 'Magreza!'
    } else if (res < 24.9) {
        show2.innerHTML = 'Normal!'
    } else if (res < 30) {
        show2.innerHTML = 'Sobrepeso!'
    } else if (res > 30) {
        show2.innerHTML = 'Obesidade!'
    } else {
        alert('Favor informar os valores.')
        show1.innerHTML = ""
        show2.innerHTML = ""
    }
}