//getting elements 

const statusDiv= document.querySelector('.status');

const resetDiv= document.querySelector('.reset');

const cellDivs= document.querySelectorAll('.game-cell');


const winningMessageElement = document.querySelector(".winning-message");
const resetButton= document.querySelector(".reset-button");

const ResultText=document.querySelector(".winner-final");


//variables
  
  let xNext=true;
  let isGameLive= true;
  let winner =null;


  //functions

    // function to print result of the game
    let winnerCheck=(letter)=>{
       
        statusDiv.innerHTML=`${letter} is the winner`;
         winningMessageElement.classList.add("show");
         ResultText.innerHTML = `${letter} is the winner`;
        isGameLive=false;
    }

      // function to check the status of the game ,, checking if anyone is winning or 
      // or game is tied
  let checkGameStatus =()=>{
    let topLeft= cellDivs[0].classList[2];
    let topMiddle= cellDivs[1].classList[2];
    let topRight= cellDivs[2].classList[2];
    let middleLeft= cellDivs[3].classList[2];
    let middleMiddle= cellDivs[4].classList[2];
    let middleRight= cellDivs[5].classList[2];
    let bottomLeft= cellDivs[6].classList[2];
    let bottomMiddle= cellDivs[7].classList[2];
    let bottomRight= cellDivs[8].classList[2];

    if(topLeft && topLeft===topMiddle && topLeft===topRight){
        winnerCheck(topLeft);
    }
    else if(middleLeft && middleLeft===middleMiddle && middleLeft===middleRight){
        winnerCheck(middleLeft);
    }
    else if(bottomLeft && bottomLeft===bottomMiddle && bottomLeft===bottomRight){
        winnerCheck(bottomLeft);
    }
    else if(topLeft && topLeft== middleLeft && topLeft==bottomLeft){
        winnerCheck(topLeft);
    }
    else if(topMiddle && topMiddle===middleMiddle && topMiddle== bottomMiddle){
        winnerCheck(topMiddle);
    }
    else if(topRight && topRight===middleRight && topRight===bottomRight){
        winnerCheck(topRight);
    }
    else if(topLeft && topLeft===middleMiddle && topLeft==bottomRight){
          winnerCheck(topLeft);
    }
    else if(topRight && topRight===middleMiddle && topRight===bottomLeft){
        winnerCheck(topRight);
    }
    else if(topLeft && topMiddle && topRight 
        && middleLeft && middleMiddle 
        && middleRight && bottomLeft && bottomMiddle && bottomRight ){
                  statusDiv.innerHTML= "Game is Tied!";
                 winningMessageElement.classList.add("show");
                 ResultText.innerHTML = "Game is Tied";
                  isGameLive=false;
        }
        else {
              xNext=!xNext;
              if(xNext){
                  statusDiv.innerHTML ="x is next";
              }
              else {
                  statusDiv.innerHTML = "o is next";
              }
        }

  }; 

    // function to handle the reset event
  let handleReset = (e)=>{
     for(let celldiv of cellDivs){
         
        celldiv.classList.remove('x');
        celldiv.classList.remove('o');

     }

     winningMessageElement.classList.remove("show");
     isGameLive=true;
     xNext=true;
     statusDiv.innerHTML="x is next";
     

  };

  resetButton.addEventListener('click',handleReset);
  resetDiv.addEventListener('click',handleReset);
  
  


  // function to add "X" or "O" in the game
  let handleCellClick = (e)=>{
      let classList=e.target.classList;
    //   console.log(classList);

        if(classList[2]==='x' || classList[2]==='o'){
            return;
        }
        if(!isGameLive) return;

      if(xNext){
          classList.add('x');
        
         
      }
      else {
          classList.add('o');
          
      }
      
     
      checkGameStatus();
      
  };

  // for loop adding eventListerner on each and every game grid cell
  for(const celldiv of cellDivs){
      celldiv.addEventListener('click', handleCellClick);
  }