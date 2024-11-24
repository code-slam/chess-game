const gameboard =document.querySelector('#gameboard')
const player =document.querySelector("#player")
const info = document.querySelector("#info-about")

const width=8
let playergo='black'
let opponentGo='white'
player.textContent=playergo
const startpieces = [
    rook,knight,bishop,queen,king,bishop,knight,rook,
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    rook,knight,bishop,queen,king,bishop,knight,rook
]


function createboard(){
    startpieces.forEach((startpiece,i)=>{
       const square= document.createElement('div')
       square.classList.add('square')
       square.innerHTML=startpiece
       square.firstChild?.setAttribute('draggable',true)
       square.setAttribute('square-id',i)
       const row=Math.floor((63-i)/8) +1
       if(row%2 === 0){
            square.classList.add(i%2===0?'beige':'green')
       }else {
            square.classList.add(i%2===0?'green':'beige')
       }
      
       if(i<=15){
        square.firstChild.classList.add('black')
        
       }
       if(i>=48){
        square.firstChild.classList.add('white')
        
       }
       gameboard.append(square)
    })
}

createboard()

const allSquares=document.querySelectorAll(".square")

allSquares.forEach(square=>{
    square.addEventListener('dragstart',dragStart)
    square.addEventListener('dragover',dragOver)
    square.addEventListener('drop',dragDrop)
})
let startPosID
let draggedElement
function dragStart(e){
    
    startPosID=(e.target.closest('.square').getAttribute('square-id'))
    draggedElement=(e.target)
   
}
function dragOver(e){
    e.preventDefault()
    
}

function dragDrop(e){
    e.stopPropagation()
    
    const targetSquare = e.target.classList.contains('square') 
        ? e.target 
        : e.target.parentNode

    // Check if the target is actually a square on our board
    if (!targetSquare.classList.contains('square')) {
        return // Exit if not dropping on a valid square
    }
    const correctGo = draggedElement.classList.contains(playergo)
    opponentGo = playergo === 'white' ? 'black' : 'white'
    
    // Check if target square has a piece
    const targetPiece = targetSquare.querySelector('.piece')
    const taken = targetPiece !== null
    const takenByOpponent = taken && targetPiece.classList.contains(opponentGo)

   
    const valid = checkIfValid(e.target)
 
    if (correctGo) {
        // Handle capturing an opponent's piece
        if (takenByOpponent && valid ) {
            targetSquare.removeChild(targetPiece)
            targetSquare.appendChild(draggedElement)
           // checkForWin()
            changeplayer()
             checkForWin()
            return
        }
        
        
        if (taken && !takenByOpponent) {
            return
        }
        
        if (valid && !taken) {
            targetSquare.appendChild(draggedElement)
          
            changeplayer()
             checkForWin()
        }
    }
}
function checkIfValid(target){
    const endpos=Number(target.getAttribute('square-id')) ||Number(target.parentNode.getAttribute('square-id'))
    const startpos=Number(startPosID)
    const piece=draggedElement.id
    const opponentplay=opponentGo

    switch(piece){
        case 'pawn':
            const starterrow =[8,9,10,11,12,13,14,15]
            if(starterrow.includes(startpos) && startpos+16===endpos &&! document.querySelector(`[square-id="${startpos+16}"]`).firstChild)return true
            
            if((startpos+8===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild)
                ||( startpos+7===endpos && document.querySelector(`[square-id="${startpos+7}"]`).firstChild)
                || ( startpos+9===endpos && document.querySelector(`[square-id="${startpos+9}"]`).firstChild )
            )return true
            break
        case 'knight':
            
            const n1=startpos+15
            const n2=startpos+17
            const n3=startpos+6
            const n4=startpos+10
            const n5=startpos-15
            const n6=startpos-17
            const n7=startpos-6
            const n8=startpos-10
            
            const knightmoves=[n1,n2,n3,n4,n5,n6,n7,n8]
            if(knightmoves.includes(endpos) && endpos%2!==startpos%2)return true
            break
        case 'bishop':
            const directions = [9, -9, 7, -7]; // Diagonal directions for a bishop
            
        
            for (let dir of directions) {
                
        
                for (let step = 1; step < 8; step++) { // Bishop can move up to 7 steps in any direction
                    const nextPos = startpos + dir * step;
        
                
        
                    // Boundary chec
                    if (nextPos < 0 || nextPos >= 64) {
                        console.log("Out of board boundaries.");
                        break;
                    }
        
                    // Ensure bishop doesn't "wrap around" the board (e.g., moving left from left edge to right edge)
                    if (Math.abs((startpos % 8) - (nextPos % 8)) !== step) {
                        
                        break;
                    }
        
                    const nextSquare = document.querySelector(`[square-id="${nextPos}"]`);
                    if (!nextSquare) {
                        console.log("No square found at this position.");
                        break;
                    }
        
                    // Stop if there is a blocking piece
                    if (nextSquare.firstChild) {
                        
        
                        // If the blocking piece is on the target square and is an opponent's piece, allow capture
                        if (nextPos === endpos && nextSquare.firstChild.classList.contains(opponentplay)) {
                            
                            return true;
                        }
        
                        
                        break; // Block encountered, stop in this direction
                    }
        
                    // Allow movement if the target square matches the end position
                    if (nextPos === endpos) {
                    
                        return true;
                    }
                }
            }
            
            break;
        case 'rook':
            
            if
                (startpos+8===endpos 
                ||startpos+16===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild
                ||startpos+24===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+16}"]`).firstChild
                ||startpos+32===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+24}"]`).firstChild
                ||startpos+40===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+24}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+32}"]`).firstChild
                ||startpos+48===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+24}"]`).firstChild  && ! document.querySelector(`[square-id="${startpos+32}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+40}"]`).firstChild
                ||startpos+56===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+24}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+32}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+40}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+48}"]`).firstChild
            )return true;
            if(
                (startpos-8===endpos 
                ||startpos-16===endpos && ! document.querySelector(`[square-id="${startpos-8}"]`).firstChild
                ||startpos-24===endpos && ! document.querySelector(`[square-id="${startpos-8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-16}"]`).firstChild
                ||startpos-32===endpos && ! document.querySelector(`[square-id="${startpos-8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-24}"]`).firstChild
                ||startpos-40===endpos && ! document.querySelector(`[square-id="${startpos-8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-24}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-32}"]`).firstChild
                ||startpos-48===endpos && ! document.querySelector(`[square-id="${startpos-8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-24}"]`).firstChild  && ! document.querySelector(`[square-id="${startpos-32}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-40}"]`).firstChild
                ||startpos-56===endpos && ! document.querySelector(`[square-id="${startpos-8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-24}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-32}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-40}"]`).firstChild &&! document.querySelector(`[square-id="${startpos-48}"]`).firstChild
            ))return true;
            if((Math.floor(startpos / 8) === Math.floor(endpos / 8)) &&
                (startpos+1===endpos 
                ||startpos+2===endpos && ! document.querySelector(`[square-id="${startpos+1}"]`).firstChild
                ||startpos+3===endpos && ! document.querySelector(`[square-id="${startpos+1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+2}"]`).firstChild
                ||startpos+4===endpos && ! document.querySelector(`[square-id="${startpos+1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+3}"]`).firstChild
                ||startpos+5===endpos && ! document.querySelector(`[square-id="${startpos+1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+3}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+4}"]`).firstChild
                ||startpos+6===endpos && ! document.querySelector(`[square-id="${startpos+1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+3}"]`).firstChild  && ! document.querySelector(`[square-id="${startpos+4}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+5}"]`).firstChild
                ||startpos+7===endpos && ! document.querySelector(`[square-id="${startpos+1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+3}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+4}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+5}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+6}"]`).firstChild
            ))return true;
            if((Math.floor(startpos / 8) === Math.floor(endpos / 8)) &&
                (startpos-1===endpos 
                ||startpos-2===endpos && ! document.querySelector(`[square-id="${startpos-1}"]`).firstChild
                ||startpos-3===endpos && ! document.querySelector(`[square-id="${startpos-1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-2}"]`).firstChild
                ||startpos-4===endpos && ! document.querySelector(`[square-id="${startpos-1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-3}"]`).firstChild
                ||startpos-5===endpos && ! document.querySelector(`[square-id="${startpos-1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-3}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-4}"]`).firstChild
                ||startpos-6===endpos && ! document.querySelector(`[square-id="${startpos-1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-3}"]`).firstChild  && ! document.querySelector(`[square-id="${startpos-4}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-5}"]`).firstChild
                ||startpos-7===endpos && ! document.querySelector(`[square-id="${startpos-1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-3}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-4}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-5}"]`).firstChild &&! document.querySelector(`[square-id="${startpos-6}"]`).firstChild
            ))return true;
            case 'queen':
                const directionq = [9, -9, 7, -7]; // Diagonal directions for a bishop
            
        
            for (let dir of directionq) {
                
        
                for (let step = 1; step < 8; step++) { // Bishop can move up to 7 steps in any direction
                    const nextPos = startpos + dir * step;
        
                
        
                    // Boundary chec
                    if (nextPos < 0 || nextPos >= 64) {
                        
                        break;
                    }
        
                    // Ensure bishop doesn't "wrap around" the board (e.g., moving left from left edge to right edge)
                    if (Math.abs((startpos % 8) - (nextPos % 8)) !== step) {
                        
                        break;
                    }
        
                    const nextSquare = document.querySelector(`[square-id="${nextPos}"]`);
                    if (!nextSquare) {
                        ;
                        break;
                    }
        
                    // Stop if there is a blocking piece
                    if (nextSquare.firstChild) {
                        
        
                        // If the blocking piece is on the target square and is an opponent's piece, allow capture
                        if (nextPos === endpos && nextSquare.firstChild.classList.contains(opponentGo)) {
                            
                            return true;
                        }
        
                        
                        break; // Block encountered, stop in this direction
                    }
        
                    // Allow movement if the target square matches the end position
                    if (nextPos === endpos) {
                    
                        return true;
                    }
                }
            }
            if
                (startpos+8===endpos 
                ||startpos+16===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild
                ||startpos+24===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+16}"]`).firstChild
                ||startpos+32===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+24}"]`).firstChild
                ||startpos+40===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+24}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+32}"]`).firstChild
                ||startpos+48===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+24}"]`).firstChild  && ! document.querySelector(`[square-id="${startpos+32}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+40}"]`).firstChild
                ||startpos+56===endpos && ! document.querySelector(`[square-id="${startpos+8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+24}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+32}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+40}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+48}"]`).firstChild
            )return true;
            if(
                (startpos-8===endpos 
                ||startpos-16===endpos && ! document.querySelector(`[square-id="${startpos-8}"]`).firstChild
                ||startpos-24===endpos && ! document.querySelector(`[square-id="${startpos-8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-16}"]`).firstChild
                ||startpos-32===endpos && ! document.querySelector(`[square-id="${startpos-8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-24}"]`).firstChild
                ||startpos-40===endpos && ! document.querySelector(`[square-id="${startpos-8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-24}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-32}"]`).firstChild
                ||startpos-48===endpos && ! document.querySelector(`[square-id="${startpos-8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-24}"]`).firstChild  && ! document.querySelector(`[square-id="${startpos-32}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-40}"]`).firstChild
                ||startpos-56===endpos && ! document.querySelector(`[square-id="${startpos-8}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-16}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-24}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-32}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-40}"]`).firstChild &&! document.querySelector(`[square-id="${startpos-48}"]`).firstChild
            ))return true;
            if((Math.floor(startpos / 8) === Math.floor(endpos / 8)) &&
                (startpos+1===endpos 
                ||startpos+2===endpos && ! document.querySelector(`[square-id="${startpos+1}"]`).firstChild
                ||startpos+3===endpos && ! document.querySelector(`[square-id="${startpos+1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+2}"]`).firstChild
                ||startpos+4===endpos && ! document.querySelector(`[square-id="${startpos+1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+3}"]`).firstChild
                ||startpos+5===endpos && ! document.querySelector(`[square-id="${startpos+1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+3}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+4}"]`).firstChild
                ||startpos+6===endpos && ! document.querySelector(`[square-id="${startpos+1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+3}"]`).firstChild  && ! document.querySelector(`[square-id="${startpos+4}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+5}"]`).firstChild
                ||startpos+7===endpos && ! document.querySelector(`[square-id="${startpos+1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+3}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+4}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+5}"]`).firstChild && ! document.querySelector(`[square-id="${startpos+6}"]`).firstChild
            ))return true;
            if((Math.floor(startpos / 8) === Math.floor(endpos / 8)) &&
                (startpos-1===endpos 
                ||startpos-2===endpos && ! document.querySelector(`[square-id="${startpos-1}"]`).firstChild
                ||startpos-3===endpos && ! document.querySelector(`[square-id="${startpos-1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-2}"]`).firstChild
                ||startpos-4===endpos && ! document.querySelector(`[square-id="${startpos-1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-3}"]`).firstChild
                ||startpos-5===endpos && ! document.querySelector(`[square-id="${startpos-1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-3}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-4}"]`).firstChild
                ||startpos-6===endpos && ! document.querySelector(`[square-id="${startpos-1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-3}"]`).firstChild  && ! document.querySelector(`[square-id="${startpos-4}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-5}"]`).firstChild
                ||startpos-7===endpos && ! document.querySelector(`[square-id="${startpos-1}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-2}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-3}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-4}"]`).firstChild && ! document.querySelector(`[square-id="${startpos-5}"]`).firstChild &&! document.querySelector(`[square-id="${startpos-6}"]`).firstChild
            ))return true;
            break
            case 'king':
            
            const k1=startpos+1
            const k2=startpos+8
            const k3=startpos+9
            const k4=startpos+7
            const k5=startpos-1
            const k6=startpos-8
            const k7=startpos-7
            const k8=startpos-9
            
            const kingmoves=[k1,k2,k3,k4,k5,k6,k7,k8]
            if(kingmoves.includes(endpos))return true
            break
    }
    
}
function changeplayer(){
    
    if(playergo==='black'){ 
        reverseId()
        playergo='white'
        player.textContent='white'
       
    }
    else{
        revertId()
        playergo='black'
        player.textContent='black'
        
    }
}
function reverseId(){
    const allSquares=document.querySelectorAll(".square")
    allSquares.forEach((square,i)=>{
        square.setAttribute('square-id',63-i )
    })
}
function revertId(){
    const allSquares=document.querySelectorAll(".square")
    allSquares.forEach((square,i)=>{
        square.setAttribute('square-id',i )
    })
}
function checkForWin() {
    const kings = document.querySelectorAll('#king'); // Select both kings using the id
    const infoDisplay = document.querySelector('#info-about');
    const whiteKing = Array.from(kings).find(king => king.classList.contains('white')); // Find the white king
    const blackKing = Array.from(kings).find(king => king.classList.contains('black')); // Find the black king
    console.log(whiteKing)
    console.log(blackKing)
    if (!whiteKing) { // If no white king exists
        infoDisplay.textContent = 'Black wins!';
        endGame();
    }
    
    if (!blackKing) { // If no black king exists
        infoDisplay.textContent = 'White wins!';
        endGame();
    }
}

function endGame() {
    const allSquares = document.querySelectorAll(".square");
   
    
    // Set the player text to GAME OVER
    player.textContent = 'GAME OVER';
    allSquares.forEach(square => {
        square.firstChild?.setAttribute("draggable", false); // Disable further dragging
   
    square.removeEventListener('dragstart', dragStart);
        square.removeEventListener('dragover', dragOver);
        square.removeEventListener('drop', dragDrop); });
    
}
