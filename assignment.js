// problem-1:
//initialize a function
function anaToVori(ana) {
    //Define input of ana
    if (typeof ana != "number" || ana < 0) {
        return "Invalid Input! please Enter a positive Number"
    }
    // ana to vori conversion
    else {
        const vori = ana / 16;
        return vori;
    }
}

// problem-2:
//initialize a function
function pandaCost(shingara, shamucha, jilapi) {
    //Define input
    if (typeof shingara != "number" || typeof shamucha != 'number' || typeof jilapi != 'number' || shingara < 0 || shamucha < 0 || jilapi < 0) {
        return "Invalid Input! please Enter a positive Number"
    }
    // Price calculation
    else {
        const shingaraPrice = 7 * shingara;
        const shamuchaPrice = 10 * shamucha;
        const jilapiPrice = 15 * jilapi;
        const totalCost = shingaraPrice + shamuchaPrice + jilapiPrice;
        return totalCost;
    }
}

// problem-3:
//initialize a function
function picnicBudget(personJoiningPicnic) {
    //Define input
    if (typeof personJoiningPicnic != "number" || personJoiningPicnic < 0) {
        return "Invalid Input! please Enter a positive Number"
    }
    // Per person cost in various situation. 
    const costForFirst100 = 5000;
    const costForSecond100 = 4000;
    const costAfterSecond100 = 3000;
    // Total budget for picnic if persons are less than hundrad.
    if (personJoiningPicnic <= 100) {
        const totalBudgetIfBelow100 = personJoiningPicnic * costForFirst100;
        return totalBudgetIfBelow100;
    }
    // Total budget for picnic if persons are above one hundrad but less than two hundrad.
    else if (personJoiningPicnic <= 200) {
        const costingForFirst100 = 100 * costForFirst100;
        const restPerson = personJoiningPicnic - 100;
        const costingForAbove100 = restPerson * costForSecond100;
        const totalBudgetIfBelow200 = costingForFirst100 + costingForAbove100;
        return totalBudgetIfBelow200;
    }
    // Total budget for picnic if persons are above two hundrad.
    else if (personJoiningPicnic > 200); {
        const costingForFirst100 = 100 * costForFirst100;
        const costingForAbove100 = 100 * costForSecond100;
        const restPerson = personJoiningPicnic - 200;
        const costingAfter200 = restPerson * costAfterSecond100;
        const totalBudgetIfAbove200 = costingForFirst100 + costingForAbove100 + costingAfter200;
        return totalBudgetIfAbove200;
    }
}

// problem-4:
//initialize a function
function oddFriend(friendsName) {
    let firstOddFriend = "";
    for (let i = 0; i < friendsName.length; i++) {
        //Define input
        if (typeof friendsName[i] == "number") {
            return "Invalid Input! please Enter only string"
        }
        //Find odd string  
        if (friendsName[i].length % 2 == 1) {
            firstOddFriend = friendsName[i];
            break;
        }
    }
    return firstOddFriend;
}
