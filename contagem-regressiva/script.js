import CountDown from './countdown.js'

const diasParaONatal = new CountDown('24 December 2021 23:59:59 GMT-0300')

const contador = document.querySelector('.contador')
setInterval(() => {
    contador.innerHTML = `Faltam ${diasParaONatal.total.days} dias ${diasParaONatal.total.hours} horas, ${diasParaONatal.total.minutes} minutos e ${diasParaONatal.total.seconds} segundos`
    //console.log(diasParaONatal.total)
}, 1000)

