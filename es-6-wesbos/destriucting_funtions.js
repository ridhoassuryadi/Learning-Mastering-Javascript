let convertCurrency = (amount) => {
    const converted = {
	USD : amount * 0.76,
	GPB : amount * 0.53,
	AUD : amount * 1.01,
	MEX : amount * 13.30
    }

    return converted
}


const { USD, GPB, AUD, MEX } = convertCurrency(100);

console.log(`USD ${USD}, GPB ${GPB}, AUD ${AUD}, MEX ${MEX}`);

let tipCalc = ({ total = 100, tip = 0.15, tax = 0.13 } = {}) => total + (tip * total) + (tax * total);

const bill = tipCalc();

console.log(bill);
