//.1. Redain to degree
function radianToDegree(radian){
    // error handle
    if(typeof radian !== 'number' ){
        return 'Please enter a number'
    }
    const pi = Math.PI;
    //calculate result
    const degrees = radian * (180 / pi);
    return degrees.toFixed(2);
}
// radianToDegree();



//2.Fill extention checker
function isJavaScriptFile(fileName){
    if(fileName.match('.js') == '.js'){
        return true;
    }
    else{
        return false;
    }
}
// isJavaScriptFile();




//3.oil price 
function oilPrice(dieselQuantity, petrolQuatity, octaneQuantity){
    //error handle
    if(typeof dieselQuantity !== 'number' || typeof petrolQuatity !== 'number' || typeof octaneQuantity !== 'number'){
        return 'Please enter a number'
    }
    const perLitreDieselRate = 114;
    const perLitrePetrolRate = 130;
    const perLitreOctaneRate = 135;
    //Calculate total cost
    const totalCost = (perLitreDieselRate * dieselQuantity) + (perLitrePetrolRate * petrolQuatity) + (perLitreOctaneRate * octaneQuantity);
    return totalCost;
}
// oilPrice();



//4. publicBusfare
function publicBusFare(people){
    //error handle
    if(typeof people !== 'number' ){
        return 'Please enter a number'
    }
    const busRemaining = people % 50;
    const microBusRemaining = busRemaining % 11;
    const publicBusRemaining = microBusRemaining;
    //calculate publicBusfarecost
    const publicBusFareCost = publicBusRemaining * 250;
    return publicBusFareCost;
}
publicBusFare();



//5.isBestFriend
function  isBestFriend(bestFriendOne, bestFriendTwo){
    if(bestFriendOne.name.toLowerCase() == bestFriendTwo.friend.toLowerCase() && bestFriendOne.friend.toLowerCase() == bestFriendTwo.name.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
}
isBestFriend();




