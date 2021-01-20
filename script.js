let bill;

const calculateTip = () => {
    bill = parseFloat(document.getElementById('bill').value);
    const result = bill * (15 / 100);
    document.getElementById('output').innerHTML = result.toFixed(2);

}

const reset = () => {
    document.getElementById('bill').value = '';
    document.getElementById('output').innerText = '';
}