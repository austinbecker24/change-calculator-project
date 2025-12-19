function calculateChange(changeTotal) {
    const denominations = {
        oneHundredDollars: 10000,
        fiftyDollars: 5000,
        twentyDollars: 2000,
        tenDollars: 1000,
        fiveDollars: 500,
        oneDollars: 100,
        quarters: 25,
        dimes: 10,
        nickels: 5,
        pennies: 1
    };

    const result = {
        oneHundredDollars: 0,
        fiftyDollars: 0,
        twentyDollars: 0,
        tenDollars: 0,
        fiveDollars: 0,      
        oneDollars: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    };

    let remainingCents = changeTotal;

    result.oneHundredDollars = Math.floor(remainingCents / denominations.oneHundredDollars);
    remainingCents %= denominations.oneHundredDollars;

        result.fiftyDollars = Math.floor(remainingCents / denominations.fiftyDollars);
    remainingCents %= denominations.fiftyDollars;

        result.twentyDollars = Math.floor(remainingCents / denominations.twentyDollars);
    remainingCents %= denominations.twentyDollars;

        result.tenDollars = Math.floor(remainingCents / denominations.tenDollars);
    remainingCents %= denominations.tenDollars;

        result.fiveDollars = Math.floor(remainingCents / denominations.fiveDollars);
    remainingCents %= denominations.fiveDollars;

        result.oneDollars = Math.floor(remainingCents / denominations.oneDollars);
    remainingCents %= denominations.oneDollars;

    result.quarters = Math.floor(remainingCents / denominations.quarters);
    remainingCents %= denominations.quarters;

    result.dimes = Math.floor(remainingCents / denominations.dimes);
    remainingCents %= denominations.dimes;

    result.nickels = Math.floor(remainingCents / denominations.nickels);
    remainingCents %= denominations.nickels;

    result.pennies = Math.floor(remainingCents / denominations.pennies);

    return result;
}

function handleClickEvent() {
    const amountDue = Number(document.getElementById('amount-due').value);
    const amountReceived = Number(document.getElementById('amount-tendered').value);
    const changeTotal = Math.round((amountReceived - amountDue) * 100); // convert to cents

    /*
    document.getElementById('oneHundredDollars',
                            'fiftyDollars', 
                            'twentyDollars', 
                            'tenDollars', 
                            'fiveDollars', 
                            'oneDollars', 
                            'quarters', 
                            'dimes', 
                            'nickels', 
                            'pennies').textContent = '';
    */

    document.getElementById('oneHundredDollars').textContent = '';
    document.getElementById('fiftyDollars').textContent = '';
    document.getElementById('twentyDollars').textContent = '';
    document.getElementById('tenDollars').textContent = '';
    document.getElementById('fiveDollars').textContent = '';
    document.getElementById('oneDollars').textContent = '';
    document.getElementById('quarters').textContent = '';
    document.getElementById('dimes').textContent = '';
    document.getElementById('nickels').textContent = '';
    document.getElementById('pennies').textContent = '';

    if (changeTotal < 0) {
        //alert('Please ask customer to provide additional money');
        document.getElementById('change-due').textContent = 'Please ask customer to provide $' + (amountDue - amountReceived).toFixed(2);
        return;
    }
        if (changeTotal === 0) {
        //alert('EXACT CHANGE!');
        document.getElementById('change-due').textContent = "EXACT CHANGE PROVIDED, LET'S CELEBRATE!!!!";
        return;
    }

    const result = calculateChange(changeTotal);

    document.getElementById('change-due').textContent = 'Total Change Due: $' + ((amountReceived - amountDue).toFixed(2));
    document.getElementById('oneHundredDollars').textContent = result.oneHundredDollars + (result.oneHundredDollars === 1 ? ' Hundred' : ' Hundreds');
    document.getElementById('fiftyDollars').textContent = result.fiftyDollars + ' Fifty';
    document.getElementById('twentyDollars').textContent = result.twentyDollars + (result.twentyDollars === 1 ? ' Twenty' : ' Twenties');
    document.getElementById('tenDollars').textContent = result.tenDollars + (result.tenDollars === 1 ? ' Tenner' : ' Tens');
    document.getElementById('fiveDollars').textContent = result.fiveDollars + (result.fiveDollars === 1 ? ' Fiver' : ' Fives');
    document.getElementById('oneDollars').textContent = result.oneDollars + (result.oneDollars === 1 ? ' One' : ' Ones');
    document.getElementById('quarters').textContent = result.quarters + (result.quarters === 1 ? ' Quarter' : ' Quarters');
    document.getElementById('dimes').textContent = result.dimes + (result.dimes === 1 ? ' Dime' : ' Dimes');
    document.getElementById('nickels').textContent = result.nickels + (result.nickels === 1 ? ' Nickel' : ' Nickels');
    document.getElementById('pennies').textContent = result.pennies + (result.pennies === 1 ? ' Penny' : ' Pennies');
}

function handleEnterKeyPress(event) {
    // Check if the key pressed is the 'Enter' key
    if (event.key === 'Enter') {
        // Prevent the default behavior (like form submission, if applicable)
        event.preventDefault();
        // Call your main function
        handleClickEvent();
    }
}

addEventListener('keydown', handleEnterKeyPress);

document.getElementById('calculate-button').onclick = handleClickEvent;





