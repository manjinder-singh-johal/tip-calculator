let bill;

const calculateTip = () => {
    bill = parseFloat(document.getElementById('bill').value);
    const result = bill * (15 / 100);

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