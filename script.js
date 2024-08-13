function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	
    let roman = '';
    const values = Object.values(obj);

    for (let i = 0; i < values.length; i++) {
    const [symbol, value] = values[i];
    
    // Check if subtraction is needed (like IV, IX, etc.)
    if (i < values.length - 2) {
        const nextValue = values[i + 2][1];
        if (num >= value - nextValue) {
            roman += values[i + 2][0] + symbol;
            num -= value - nextValue;
            continue;
        }
    }

    // Add the current symbol to the result as many times as possible
    while (num >= value) {
        roman += symbol;
        num -= value;
    }
}

    return roman;
  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
