import '../style.css'

import { selectRandomFromArray }  from './util'
import party from 'party-js'

document.getElementById('button')
.addEventListener('click',onClick)


function onClick(){
    const product = document.getElementById('product')

    const participants = document.getElementById('participants')

    const winner = document.getElementById('winner')

    const nameList = participants.value.split("\n")
    const winnerName = selectRandomFromArray(nameList)
    let msg

    if(!product.value) msg='No estás sorteando nada'
    else if (!participants.value) msg='No hay participantes'
    else {
        msg =`Enhorabuena ${winnerName} has ganado ${product.value}`
        party.confetti(winner)
    }

    winner.innerHTML = msg
}

