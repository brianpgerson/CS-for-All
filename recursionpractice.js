function reverse(str){
	if (str == ""){
		return "";
	} else {
		var firstSymbol = str[0];
		return reverse(str.slice(1)) + firstSymbol;
	}
}

function bestSubset(weightLimit, items){
	if (weightLimit == 0 || items.length == 0){
		return 0;
	} else if (items[0] > weightLimit){
		return bestSubset(weightLimit, items.slice(1));
	} else {
		loseIt = bestSubset(weightLimit, items.slice(1));
		useIt = items[0] + bestSubset(weightLimit - items[0], items.slice(1));
		return Math.max(loseIt, useIt);
	}
}

function editCost(firstStr, secondStr){
	if (firstStr.length == 0){
		return secondStr.length;
	} else if (secondStr.length == 0){
		return firstStr.length;
	} else if (firstStr[0] == secondStr[0]){
		return editCost(firstStr.slice(1), secondStr.slice(1));
	} else {
		var substitution = 1 + editCost(firstStr.slice(1), secondStr.slice(1));
		var deletion = 1 + editCost(firstStr.slice(1), secondStr);
		var insertion = 1 + editCost(firstStr, secondStr.slice(1));
		return Math.min(substitution, deletion, insertion);
	}
}

function recursiveFactorial(n){
	if (n == 0) {
		return 1;
	} else {
		return recursiveFactorial(n-1) * n;
	}
}

function dot(x,y){
	if (x.length != y.length) {
		return console.log('error: list lengths are different.');
	}
	else if (x.length == 0 || y.length == 0){
		return 0;
	} else {
		var firstProduct = x[0] * y[0];
		return firstProduct + dot(x.slice(1), y.slice(1));
	}
}

function explode(str){
	if (str == ""){
		return x;
	} else {
		x = [];
		return x.concat(str[0], explode(str.slice(1)));
	}
}

function ind(el, list){
	var not = [];
	if (list[0] == [] || list[0] == undefined) {
		console.log("not in here.")
		return 1;
	}
	else if (el == list[0]){
		return 0;
	} else {
		return not.push(list[0]) + ind(el, list.slice(1));
	}
}

function ind(el, list){
	if (list[0] == [] || list[0] == undefined) {
		console.log("not in here.")
		return 1;
	}
	else if (el == list[0]){
		return 0;
	} else {
		return 1 + ind(el, list.slice(1));
	}
}