// func that checks validity of shape. longest side must be smallaer than or equal to the sum of the remaining sides. Takes sidelengths array and num of sides. Return true/false

export const shapeChecker = (sideLengths, numSides) => {
    let isValid;
    let longestSide = Math.max(...sideLengths);
    let sideSum = sideLengths.reduce(function(acc, curr) {
        return acc + curr
    }) - longestSide;
    if (longestSide <= sideSum) {
        isValid = true
    } else {
        isValid = false
    }
    return isValid


    
}