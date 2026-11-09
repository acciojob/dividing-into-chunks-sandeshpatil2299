const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let chunk= [];
	let result= [];
	let sum= 0;

	for(let value of arr) {
		if(sum + value <= n) {
			chunk.push(value);
			sum += value;
		}
		else {
			result.push(chunk);
			chunk= [value];
			sum= value;
		}
	}

	if(chunk.length > 0) result.push(chunk);

	return result
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
