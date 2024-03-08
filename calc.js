//calculates VAT.
function vatCalculator(inputNumber) {
    var vat = inputNumber * 0.20
    document.getElementById('vat').innerHTML = "VAT = " + vat.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    document.getElementById('vat').style.visibility = 'visible';
    return vat;
}

//calculates Corportation Tax.
function corpTaxCalculator(inputNumber, vat) {
    var taxableIncome = inputNumber - vat;
    var corpTax = taxableIncome * 0.19;
    document.getElementById('corpTax').innerHTML = "Corporation tax = " + corpTax.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    document.getElementById('corpTax').style.visibility = 'visible';
    return corpTax;
}

//calculates total tax.
function total(vat, corpTax) {
    var totalTax = vat + corpTax;
    document.getElementById('totalTax').innerHTML = "Total = " + totalTax.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    document.getElementById('totalTax').style.visibility = 'visible';
}

//triggered by typing in a number.
function main() {
    var inputNumber = document.getElementById('inputNumber').value;
    var vat = vatCalculator(inputNumber);
    var corpTax = corpTaxCalculator(inputNumber, vat);
    total(vat, corpTax);
    
}