function showFavFood() {
    //We want to capture the text inside of the FavFood textbox not the textbox element itself
    //To get the text we have to use .value
    let userInput = document.getElementById('favFood').value;

    //In order to avoid casing errors lets send the input toLowerCase()
    let inputLower = userInput.toLowerCase()

    //Capture the output element so we can update its contents
    let userOutput = document.getElementById('favFoodResult');

    //switches in JS work the same way they do in C#:
    switch (inputLower) {
        case 'pizza':
            userOutput.textContent = `I also love ${userInput}! You can enjoy it in so many different ways!`
            break;

        case 'barbecue':
        case 'bbq':
        case 'barbeque':
            userOutput.textContent = `${userInput} is fantastic! In Kansas City we have ${userInput} figured out.`
            break;

        case 'tacos':
            userOutput.textContent = `It doesn't have to be Tuesday to enjoy ${userInput}!`
            break;

        default:
            userOutput.textContent = `I think ${userInput} is a fine choice.`
            break;
    }
}