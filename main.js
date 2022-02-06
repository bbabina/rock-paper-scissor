const game = () => {
    let pScore = 0;
    let cScore = 0;  // declared this globally because i need this throughout the game

    // 1. Start the game
    const startGame = () => {
        const playBtn = document.querySelector(".start button");
        const startScreen = document.querySelector(".start");
        const result = document.querySelector(".result");

        playBtn.addEventListener("click", () => {
            startScreen.classList.add("fadeOut");
            result.classList.add("fadeIn");
        });
    };

    // 2. Play the game
    const playGame = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        // 3. Computer options
        // const computerNumber =Math.floor(Math.random()*3);
        // console.log(computerNumber);
        
        const computerOptions = ['rock', 'paper', 'scissors'];
        // computerOptions[computerNumber];
        

        // 4 getting options for each individual button
        options.forEach(option => {
            option.addEventListener("click", function() {
                // console.log(this);  displays whatever you click

                // 5. Computer choice
                const computerNumber =Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                // console.log(computerChoice);



                // 7 call compareResults function
                compareResult(this.textContent, computerChoice);



                // 13. update images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;
            });
        });
        


    };



    // 6.  winner

    const compareResult = (playerChoice, computerChoice) => {

        // 8. update the choose an option text
        const winner = document.querySelector(".winner");

        //9. check for a tie
        if(playerChoice === computerChoice) {
            winner.textContent = "It's a tie!";
            return;
            
        }
        // 10. check for rock
        if(playerChoice === "rock") {
            if(computerChoice === "scissors") {
                winner.textContent = "Player Wins!";
                // 15. increase pscore
                pScore++;
                updateScore();
                return;
                
            } else {
                winner.textContent = "Computer Wins!";
                // 15. increase cscore
                cScore++;
                updateScore();
                return;
               
            }
        }

        // 11. check for paper
        if(playerChoice === "paper") {
            if(computerChoice === "scissors") {
                winner.textContent = "Computer Wins!";
                // 15. increase cscore
                cScore++;
                updateScore();
                return;
                
            } else {
                winner.textContent = "Player Wins!";
                // 15. increase pscore
                pScore++;
                updateScore();
                return;
               
            }
        }

        // 12. check for scissors
        if(playerChoice === "scissors") {
            if(computerChoice === "rock") {
                winner.textContent = "Computer Wins!";
                // 15. increase cscore
                cScore++;
                updateScore();
                return;
                
            } else {
                winner.textContent = "Player Wins!";
                // 15. increase pscore
                pScore++;
                updateScore();
                return;
               
            }
        }


    };


    // 14. update the score
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    


    // Function calls
    startGame();
    playGame();
};

game();