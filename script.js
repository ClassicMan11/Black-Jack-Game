let messageEl = document.getElementById('message'),
        cardsEl = document.getElementById('cards'),
        sumEl = document.getElementById('sum'),
        newCardEl = document.getElementById("new-card"),
        playerName = document.getElementById('player-name'),
        playerChips = document.getElementById('player-chips')
        player = {
                name: "Player",
                chips: 200
        },
        sum = 0,
        cards = [],
        message = "",
        isAlive = true,
        hasBlackJack = false;
        playerName.textContent = player.name
        playerChips.textContent = player.chips

    function getRandomCard() {
        let randomNumber = Math.floor(Math.random() * 13) + 1; 
        if ( randomNumber > 10 ) {
                    return 10  
                }
                else if ( randomNumber === 1 ) {
                    return 11 
                }
                else {
                    return randomNumber  
                }
        }
    
    function startGame() {
        newCardEl.style.display = "flex";
        let firstCard = getRandomCard(),
            secondCard = getRandomCard()
        sum = firstCard + secondCard
        cards = [firstCard, secondCard]
       renderGame()
       playersChips()
    }
    
    function renderGame() {
        if (sum < 21) {
            message = "Do you want to draw another card?"
            isAlive = true
            hasBlackJack = false
        }
         else if (sum > 21) {
            message = "You're out of the game"
            isAlive = false
            hasBlackJack = false
        } 
        else if (sum === 21) {
            message = "You've won this game"
            isAlive = true
            hasBlackJack = true
        }
      
        cardsEl.textContent = "Cards: "
      for (i = 0; i < cards.length; i++) {   
        cardsEl.textContent += cards[i] + ' ' 
      }                                      
        sumEl.textContent = "Sum: " + sum;
        messageEl.textContent = message
    }
    
    
    function newCard() {
        if (isAlive === true && hasBlackJack === false) {
            let card = getRandomCard()
            sum += card
            cards.push(card)
            renderGame()
        } else {
            return
        }
        if (isAlive === false && hasBlackJack === false) {
                newCardEl.style.display = "none";  
        } else if (isAlive === true && hasBlackJack === true) {
                newCardEl.style.display = "none";  
        }
        
        playersChips()
    }
    
    function playersChips() {
        if (sum === 21 && hasBlackJack === true) {
            player.chips += 10;
        } else if (isAlive === false){
            player.chips -= 10;
        } else {
                return
        }
        
        playerName.textContent = player.name
        playerChips.textContent = player.chips
    }


        newCardEl.addEventListener("dblclick", () => {
                window.alert("This is not allowed!!")
        })