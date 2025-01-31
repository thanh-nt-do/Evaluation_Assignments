// MVC design pattern

const View = (() => {
    // dom selector
    const domSelector = {
        startBtn: document.querySelector('#start-button'),
        timeLeftCount: document.querySelector('#time-left'),
        gridContainer: document.querySelector('.grid-container'),
        score: document.querySelector('#score'),
        moles: document.querySelectorAll('.mole')
    }
    
    // Rerender template
    const renderScore = (score) => {
        domSelector.score.textContent = score
    }

    const renderTime = (time) => {
        domSelector.timeLeftCount.textContent = time
    }

    // Get a random mole 
    const getRandomMole = (activeMoles) => {
        while (true) {
            let newMole = domSelector.moles[Math.floor(Math.random() * domSelector.moles.length)]
            if (!activeMoles.includes(newMole)) {
                return newMole
            }
        }
    }

    return { domSelector, renderScore, renderTime, getRandomMole }

})()

const Model = ((view) => {
    const { domSelector, renderScore, renderTime, getRandomMole } = view

    class State {
        constructor() {
            this._moleActive = []
            this._score = 0
            this._time = 30
            this._isActive = true
        }

        // get active mole list
        get moleActive() {
            return this._moleActive
        }

        // get game status
        get isActive() {
            return this._isActive
        }

        // get game score
        get score() {
            return this._score
        }

        // start the game
        startGame() {
            this._moleActive = []
            this._score = 0
            this._time = 30
            this._isActive = true
            view.renderScore(this._score);
            view.renderTime(this._time);
            domSelector.moles.forEach((mole) => mole.style.display = 'none')
        }

        // track timer
        decreaseTime() {
            if (this._time > 0) {
                this._time--
                view.renderTime(this._time);
            } else {
                this._isActive = false
            }
        }

        // calculate score
        increaseScore() {
            this._score++
            view.renderScore(this._score);   
        }

        // add mole to the active list
        addMole(mole) {
            if (this._moleActive.length < 3) {
                this._moleActive.push(mole)
            }
        }

        // remove mole from active list
        removeMole(mole) {
            this._moleActive = this._moleActive.filter((item) => item !== mole);
        }
        
    }
    
    return { State } 

})(View)

const Controller = ((view, model) => {
    // when there is an user event, it will update the model
    const { domSelector, getRandomMole } = view
    const { State } = model

    let game = new State()
    let timer
    let moleStatus

    // Event listener to start the game
    domSelector.startBtn.addEventListener("click", () => {
        clearInterval(timer)
        clearInterval(moleStatus)
        game.startGame()

        timer = setInterval(() => {
            if (game.isActive) {
                game.decreaseTime()
            } else {
                clearInterval(timer)
                clearInterval(moleStatus)
                alert("Game Over! Your final score is " + game.score);
            }
        }, 1000)

        moleStatus = setInterval(() => {
            let newMole = getRandomMole(game.moleActive)
            console.log(newMole)
            console.log(game.moleActive)
            game.addMole(newMole)

            if (game.moleActive.includes(newMole)) {
                // make mole appear
                newMole.style.display = 'block'
                
                // hide mole on click
                newMole.onclick = () => {
                    if (game.isActive) {
                        game.increaseScore();
                        newMole.style.display = "none";
                        game.removeMole(newMole);
                    }
                }
            }

        }, 500)
    
    })

})(View, Model)
