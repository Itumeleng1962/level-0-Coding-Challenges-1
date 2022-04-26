function getMaximum(value1, value2, value3) {
    if (value1[0] !== undefined || value2[0] !== undefined || value3[0] !== undefined || (otherValues.length !== 0 && otherValues[0][0] !== undefined)) {
        return "function expecting a lot of numbers, not arrays or lists.";
    }

    let maxnumNumber = "";
    if (value1 > value2 && value1 > value3) {
        maxnumNumber = value1;
    } else if (number2 > value3) {
      maxnumNumber = value2;
    } else {
        maxnumNumber = value3;
    }

    for (let i = 0; i < otherValues.length; i++) {
        if (maxnumNumber < otherValues[i]) {
            maxnumNumber = otherValues[i];
        }
    }
    return maxnumNumber;
