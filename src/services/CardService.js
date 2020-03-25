
export function getDefaultConfig() {
    return {assassin: 1, civilist: 7, agents_red: 9, agents_blue: 8};
}


export function countCards(cards){
    let red_total = 0;
    let red_revealed = 0;
    let blue_total = 0;
    let blue_revealed = 0;
    let civilist_total = 0;
    let assassin_total = 0;
    if(cards != undefined){
        cards.forEach( card => {
            red_total = red_total + ((card.type === "RED_AGENT") ? 1 : 0);
            blue_total = blue_total + ((card.type === "BLUE_AGENT") ? 1 : 0);
            assassin_total = assassin_total + ((card.type === "ASSASSIN") ? 1 : 0);
            civilist_total = civilist_total + ((card.type === "CIVILIST") ? 1 : 0);
            red_revealed = red_revealed + ((card.type === "RED_AGENT" && card.state === "REVEALED") ? 1 : 0);
            blue_revealed = blue_revealed + ((card.type === "BLUE_AGENT" && card.state === "REVEALED") ? 1 : 0); 
        });
    }
    return {
        red: {
            found: red_revealed,
            total: red_total
        },
        blue: {
            found: blue_revealed,
            total: blue_total
        }, 
        civilist: {
            total: civilist_total
        },
        assassin: {
            total: assassin_total
        }
    }
}
function getRandomCardType(config, currentCount){
    console.log(config);

    var validCardTypes = [];
    if(currentCount.blue.total < config.agents_blue){
      validCardTypes.push("BLUE_AGENT");
    }
    if(currentCount.red.total < config.agents_red){
      validCardTypes.push("RED_AGENT");
    }
    if(currentCount.civilist.total < config.civilist){
      validCardTypes.push("CIVILIST");
    }
    if(currentCount.assassin.total < config.assassin){
      validCardTypes.push("ASSASSIN");
    }
    
    let selectedType = validCardTypes[Math.floor(Math.random() * validCardTypes.length)];
    return selectedType;
}

export function newCards(words, config){
    var selectedWords = [];
    var cards = [];
    for (let i = 0; i < 25; i++) {
        var word = "";
        do {          
            word = words[Math.floor(Math.random() * words.length)];
        } while(word === "" || selectedWords.includes(word));
        cards.push({'word': word, 'type': getRandomCardType(config, countCards(cards)),'state': "UNREVEALED"});
    }
    return cards
}