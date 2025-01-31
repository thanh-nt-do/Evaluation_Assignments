// MVC design pattern

const View = (() => {
    // dom selector
    const domSelector = {
        startBtn: document.querySelector('#start-button'),
        timeLeftCount: document.querySelector('#time-left'),
        gridContainer: document.querySelector('.grid-container'),
        score: document.querySelector('#score'),
        moles: document.querySelectorAll('.mole'),
        snakes: document.querySelectorAll('.snake')
    }
    
    // Rerender score
    const renderScore = (score) => {
        domSelector.score.textContent = score
    }

    // rerender time
    const renderTime = (time) => {
        domSelector.timeLeftCount.textContent = time
    }

    // Get a random mole 
    const getRandomMole = (activeMoles, type) => {
        while (true) {
            let newMole = domSelector[type][Math.floor(Math.random() * domSelector.moles.length)]
            if (!activeMoles.includes(newMole)) {
                return newMole
            }
        }
    }

    // hide all moles
    const removeAllMole = () => {
        domSelector.moles.forEach((mole) => mole.style.display = 'none')
    }

    // hide all snakes
    const removeAllSnake = () => {
        domSelector.snakes.forEach((snake) => snake.style.display = 'none')
    }

    // make all snakes appear
    const addAllSnake = () => {
        domSelector.snakes.forEach((snake) => snake.style.display = 'block')
    }

    return { domSelector, renderScore, renderTime, getRandomMole, removeAllMole, removeAllSnake, addAllSnake }

})()

const Model = ((view) => {
    const { removeAllMole, removeAllSnake, renderScore, renderTime } = view

    class State {
        constructor() {
            this._moleActive = []
            this._snakeActive = undefined
            this._score = 0
            this._time = 30
            this._isActive = true
        }

        // get active mole list
        get moleActive() {
            return this._moleActive
        }

        // get snake
        get snakeActive() {
            return this._snakeActive
        }

        // set snake active
        set snakeActive(newSnake) {
            this._snakeActive = newSnake
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
            this._snakeActive = undefined
            this._score = 0
            this._time = 30
            this._isActive = true
            renderScore(this._score);
            renderTime(this._time);
            removeAllMole()
            removeAllSnake()
        }

        // track timer
        decreaseTime() {
            if (this._time > 0) {
                this._time--
                renderTime(this._time);
            } else {
                this._isActive = false
            }
        }

        // calculate score
        increaseScore() {
            this._score++
            renderScore(this._score);   
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
    const { domSelector, getRandomMole, addAllSnake } = view
    const { State } = model

    let game = new State()
    let timer
    let moleStatus
    let snakeStatus

    const clearAllInterval = () => {
        clearInterval(timer)
        clearInterval(moleStatus)
        clearInterval(snakeStatus)
    }

    // Event listener to start the game
    domSelector.startBtn.addEventListener("click", () => {
        clearAllInterval()
        game.startGame()

        // start the countdown timer
        timer = setInterval(() => {
            if (game.isActive) {
                game.decreaseTime()
            } else {
                clearAllInterval()
                alert("Game Over! Your final score is " + game.score)
            }
        }, 1000)

        // start mole every 1 second
        moleStatus = setInterval(() => {
            let newMole = getRandomMole(game.moleActive, 'moles')
            // console.log(newMole)
            // console.log(game.moleActive)
            game.addMole(newMole)

            if (game.moleActive.includes(newMole)) {
                // make mole appears
                newMole.style.display = 'block'

                // Mole disappears after 2 seconds if not clicked
                let moleTimeout = setTimeout(() => {
                    newMole.style.display = 'none'
                    game.removeMole(newMole)
                }, 2000);
                
                // hide mole on click
                newMole.onclick = () => {
                    if (game.isActive) {
                        clearTimeout(moleTimeout)
                        game.increaseScore()
                        newMole.style.display = "none"
                        game.removeMole(newMole)
                    }
                }
            }

        }, 1000)

        // Start snake spawning every 2 seconds
        snakeStatus = setInterval(() => {
            let newSnake = getRandomMole([], 'snakes')
            
            // hide previous snake
            if (game.snakeActive) {
                game.snakeActive.style.display = "none"
            }
            
            // make new snake appears
            game.snakeActive = newSnake
            newSnake.style.display = "block"

            // game over on snake click
            newSnake.onclick = () => {
                if (game.isActive) {
                    addAllSnake()
                    clearAllInterval()
                    setTimeout(() => {
                        alert("Game Over!");
                    }, 500);
                }
            }

        }, 2000);
    
    })

})(View, Model)
