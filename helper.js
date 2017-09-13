
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function giveCowHeads(num) {
    "use strict";
    if ((num % 11) == 0 && (num % 5) == 0) {
        return 7;
    } else if (num%5 == 0) {
        return 2;
    } else if (num%10 == 0) {
        return 3;
    } else if (num%11 == 0) {
        return 5;
    } else {
        return 1;
    }
}

//given cards, count total number of cowHeads
function countCowHeads(cards) {
    let num = 0;
    for(let card of cards) {
        num += card.cowHeads;
    }
    return num;
}


function findPlayerOfCard(card,orgArr){
    for (var i = 0; i < orgArr.length; i++) {
        if (orgArr[i].value == card.value) {return i;}
    }
    return -1;
}

export default {
    getRandomIntInclusive: getRandomIntInclusive,
    giveCowHeads : giveCowHeads,
    countCowHeads: countCowHeads,
    findPlayerOfCard: findPlayerOfCard,

}