class Game{
    constructor(){
        this.turnCounter = "X";
        this.score = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }
    
    // addListeners() is called initially to set up event listeners

    addListeners(){
        document.querySelectorAll('.col').forEach(a => a.addEventListener('click', (e) => this.userSelectActions(e)))
        document.querySelector('button').addEventListener('click', (e) => this.resetTic(e))
    }

    //userSelectActions() is called when a square is clicked. This then calls multiple methods, using click data as a parameter for some

    userSelectActions(click){
       
        // this if statement calls checkSelected() to see if the box has already been selected, and returns an alert if it has

        if(this.checkSelected(click) == true){
            return
        } 

        // updateScore() updates the score property, the scores are stored in an array
        
        this.updateScore(click)

        // addDisplay() updates the DOM to show the updated game board

        this.addDisplay(click)

        // checkForWinner() checks the scores property for any winning combinations and alerts the user if there is a winner

        this.checkForWinner();

        // changeTurn() toggles the turnCounter property which is used by other methods 

        this.changeTurn();
    }

    checkSelected(click){
        if(this.score[click.target.dataset.key] == "X" || this.score[click.target.dataset.key] == "O"){
            alert("That square is taken! Choose another")
            return true
        }
    }

    addDisplay(click){
        if(this.turnCounter == "X"){
            click.target.innerHTML = '<p class="box-content">X</p>'
        } else if (this.turnCounter == "O"){
            click.target.innerHTML = '<p class="box-content">O</p>'
        }
    }
    
    changeTurn(){
        this.turnCounter == "X" ? this.turnCounter = "O" : this.turnCounter = "X";
    }

    updateScore(click){
        if(this.turnCounter == "X"){
            this.score[click.target.dataset.key] = "X"
        } else if(this.turnCounter == "O"){
            this.score[click.target.dataset.key] = "O"
        }
    }

    checkForWinner(){
     
        if(this.score[0] == this.score[1] && this.score[0] == this.score[2] || this.score[0] == this.score[3] && this.score[0] == this.score[6] || this.score[0] == this.score[4] && this.score[0] == this.score[8]){
            alert(`${this.score[0]} has won the game!`)
            this.resetTic();
        } else if(this.score[2] == this.score[5] && this.score[2] == this.score[8] || this.score[2] == this.score[4] && this.score[2] == this.score[6]){
            alert(`${this.score[2]} has won the game!`)
            this.resetTic();
        } else if(this.score[4] == this.score[5] && this.score[4] == this.score[3] || this.score[4] == this.score[1] && this.score[4] == this.score[7]){
            alert(`${this.score[4]} has won the game!`)
            this.resetTic();
        } else if(this.score[6] == this.score[7] && this.score[6] == this.score[8] ){
            alert(`${this.score[6]} has won the game!`)
            this.resetTic();
        } else if(this.score.filter(a => a == "X" || a == "O").length == 9){
            alert(`Its a draw, no one has won the game!`)
            this.resetTic();
        }
    }

    // resetTic() resets the properties and the display, allowing the game to restart

    resetTic(){
        this.turnCounter = "X";
        this.score = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        document.querySelectorAll('.col').forEach(a => a.innerText = "")
    }
}

let ticObj = new Game();
ticObj.addListeners();