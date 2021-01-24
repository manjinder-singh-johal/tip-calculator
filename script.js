let bill;
let tipPercentage;

const calculateTip = () => {
    bill = parseFloat(document.getElementById('bill').value);

    if (document.getElementById('five').checked) {
        tipPercentage = 5;
    } else if (document.getElementById('ten').checked) {
        tipPercentage = 10;
    } else if (document.getElementById('fifteen').checked) {
        tipPercentage = 15;
    } else {
        tipPercentage = 20;
    }

    const result = bill * (tipPercentage / 100);

    if (isNaN(result)) {
        document.getElementById('output').innerHTML = `Please enter a valid number and try again.`
    } else {
        document.getElementById('output').innerHTML = `Tip is Rs. ${result.toFixed(2)}`;
    }
   
}


const reset = () => {
    document.getElementById('bill').value = '';
    document.getElementById('output').innerText = '';
}