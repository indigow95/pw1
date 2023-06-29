//variaveis
let pomodoro = document.getElementById('pomotimer'); //pomotittle
let descanso = document.getElementById('descanso');  //pausaTittle

let pomotimer = 0;    //worktime
let descansotimer = 5; //pausatime
let segundos = "00"

function start(vari) {
    
    if (document.getElementById('minutos').textContent == '00') {
        
        if (vari === 'pom') {
            pomodoro.classList.add('ativo');
            descanso.classList.remove('ativo');
        } else if (vari === 'des') {
            pomodoro.classList.add('ativo');
            descanso.classList.remove('ativo');
        } else {    // E se o usuário clicar em descanso e o tempo não tiver acabado? verificar isso!!
            pomodoro.classList.remove('ativo');
            descanso.classList.add('ativo');
        }
    
        // change the time
        seconds = 59;
    
        let pomoMinutos = pomotimer;    //workminutes
        let descansoMinutos = descansotimer; //pausaMinutos
    
        pausaCount = 0;
    
        // countdown
        let timerFuncao = () => {
            //change the display
    
            if (pomoMinutos == 25) {
                seconds = "00";
            }
    
            if (vari = 'des' && pomoMinutos == 5) {
                seconds = "00";
            }
    
            document.getElementById('minutos').innerHTML = pomoMinutos;
            document.getElementById('segundos').innerHTML = seconds;
            document.getElementById('minutos').value = pomoMinutos;
            document.getElementById('segundos').value = seconds;
    
            // start
            if (pomoMinutos != 25) {
                seconds -= 1;
            }
    
            if (seconds == 0) {
                pomoMinutos -=  1;
                if (pomoMinutos == -1) {
                    if (pausaCount % 2 == 0) {
                        // start pausa
                        pomoMinutos = descansoMinutos;
                        pausaCount++
    
                        // change the painel
                        pomodoro.classList.remove('ativo');
                        descanso.classList.add('ativo');
                        
                    } else {
                        // continue work
                        pomoMinutos = pomotimer;
                        pausaCount++
    
                        // change the painel
                        descanso.classList.remove('ativo');
                        pomodoro.classList.add('ativo');
                    }
                }
                seconds = 59;
            } else if (seconds < 10) {
                seconds = "0" + seconds
            }
        }
    
        // começar countdown
        setInterval(timerFuncao, 1000); // 1000 = 1s
    }
}
