
//calculates VAT.
function vatCalculator(inputNumber, vat_output) {
    let vat = inputNumber * 0.20
    vat_output.innerHTML = "VAT = " + vat.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    vat_output.style.color = ''; //resets the color after an error.
    vat_output.style.visibility = 'visible';
    return vat;
}

//calculates Corportation Tax.
function corpTaxCalculator(inputNumber, vat, corpTax_output) {
    let taxableIncome = inputNumber - vat;
    let corpTax = taxableIncome * 0.19;
    corpTax_output.innerHTML = "Corporation tax = " + corpTax.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    corpTax_output.style.color = ''; //resets the color after an error.
    corpTax_output.style.visibility = 'visible';
    return corpTax;
}

//calculates total tax.
function total(vat, corpTax, totalTax_output) {
    let totalTax = vat + corpTax;
    totalTax_output.innerHTML = "Total = " + totalTax.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    totalTax_output.style.visibility = 'visible';
}

//clears the output fields.
function clear(corpTax_output, vat_output, totalTax_output) {
    corpTax_output.style.visibility = 'hidden';
    vat_output.style.visibility = 'hidden';
    totalTax_output.style.visibility = 'hidden';
}

//changes vat and corpTax to error message and hides total tax.
function error(corpTax_output, vat_output, totalTax_output) {
    vat_output.innerHTML = "Even HMRC can't tax words!";
    vat_output.style.color = 'red';
    vat_output.style.visibility = 'visible';
    corpTax_output.innerHTML = "Please enter a number.";
    corpTax_output.style.color = 'red';
    corpTax_output.style.visibility = 'visible';
    totalTax_output.style.visibility = 'hidden';
}

//gets the output elements.
function getOutputElements() {
    let corpTax_output = document.getElementById('corpTax');
    let vat_output = document.getElementById('vat');
    let totalTax_output = document.getElementById('totalTax');
    return [corpTax_output, vat_output, totalTax_output];
}

//triggered by typing in a number.
function main() {
    // Gets the output elements.
    let [corpTax_output, vat_output, totalTax_output] = getOutputElements();
    //gets the input value.
    let inputNumber = document.getElementById('inputNumber').value;
    if (isNaN(inputNumber)) {
        error(corpTax_output, vat_output, totalTax_output);
    }
    else if (Number(inputNumber) === 0) {
        clear(corpTax_output, vat_output, totalTax_output);
    }
    else {
        let vat = vatCalculator(inputNumber, vat_output);
        let corpTax = corpTaxCalculator(inputNumber, vat, corpTax_output);
        total(vat, corpTax, totalTax_output);
    }
}