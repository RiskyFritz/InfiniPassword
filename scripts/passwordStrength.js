function strengthScore(string) {
    let length = string.length;
    let lengthScore = 0;
    let symbolScore = 0;
    let numberScore = 0;
    let passwordScore = 0;

    if (length < 6) {
        lengthScore = 0;
    } else {
        lengthScore = (length / 20);
    }

    for (var i = 0; i < password.length; i++) {
        if (string.indexOf(symbols[i]) > -1) {
            symbolScore += .15;
        }
        if (string.indexOf(numbers[i]) > -1) {
            numberScore += .10;
        }
    } 
    
    passwordScore = lengthScore + symbolScore + numberScore;

    console.log(passwordScore);
}

