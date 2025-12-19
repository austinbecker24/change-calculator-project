function calculateChange(changeTotal) {
    const denominations = {
        dollars: 100,
        quarters: 25,
        dimes: 10,
        nickels: 5,
        pennies: 1
    };

    const result = {
        dollars: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    };

    let remainingCents = changeTotal;

    result.dollars = Math.floor(remainingCents / denominations.dollars);
    remainingCents %= denominations.dollars;

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

    if (changeTotal < 0) {
        //alert('Please ask customer to provide additional money');
        document.getElementById('warning').textContent = 'Please ask customer to provide additional money'
        return;
    }

    const result = calculateChange(changeTotal);

    document.getElementById('dollars').textContent = result.dollars;
    document.getElementById('quarters').textContent = result.quarters;
    document.getElementById('dimes').textContent = result.dimes;
    document.getElementById('nickels').textContent = result.nickels;
    document.getElementById('pennies').textContent = result.pennies;
}

document.getElementById('calculate-button').onclick = handleClickEvent;





