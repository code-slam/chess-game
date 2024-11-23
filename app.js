const gameboard =document.querySelector('#gameboard')
const player =document.querySelector("#player")
const info = document.querySelector("#info-about")

const width=8
const startpieces = [
    brook,bknight,bbishop,bqueen,bking,bbishop,bknight,brook,
    bpawn,bpawn,bpawn,bpawn,bpawn,bpawn,bpawn,bpawn,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    wpawn,wpawn,wpawn,wpawn,wpawn,wpawn,wpawn,wpawn,
    wrook,wknight,wbishop,wqueen,wking,wbishop,wknight,wrook
]

function createboard(){
    startpieces.forEach((startpiece,i)=>{
       const square= document.createElement('div')
       square.classList.add('square')
       square.innerHTML=startpiece
       square.setAttribute('square-id',i)
       const row=Math.floor((63-i)/8) +1
       if(row%2 === 0){
            square.classList.add(i%2===0?'beige':'green')
       }else {
            square.classList.add(i%2===0?'green':'beige')
       }
       //square.classList.add('beige')
       gameboard.append(square)
    })
}

createboard()