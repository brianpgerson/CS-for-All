//reverses a string recursively
function reverse(str){
	if (str == ""){
		return "";
	} else {
		var firstSymbol = str[0];
		return reverse(str.slice(1)) + firstSymbol;
	}
}

//finds the best combination of items/weights to bring the most items 
//with a combined weight closest to the weight limit. recursively.
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

//recursively finds the number of edits (insertions, removals, deletions)
//required to change one string into another string
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

//pretty recursively self-explanatory, no?
function recursiveFactorial(n){
	if (n == 0) {
		return 1;
	} else {
		return recursiveFactorial(n-1) * n;
	}
}

//returns the dot product of two lists recursively (i.e. the sum of
// the products of each corresponding pair of elements)
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

//basically a recursive version of .split()
function explode(str){
	if (str == ""){
		return x;
	} else {
		x = [];
		return x.concat(str[0], explode(str.slice(1)));
	}
}


//finds the index at which an element in a list can be found. recursively.
// ~*~*~ this was a good mental breakthrough for me, i think! ~*~*~
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

//recursively removes all instances of an element in a list (or subsets of a string)
function removeAll(el, list){
	if (list[0] == [] || list[0] == undefined) {
		return [];
	} else if (el == list[0]) {
		return removeAll(el, list.slice(1));
	} else {
		return list.slice(0,1).concat(removeAll(el, list.slice(1)));
	}

}



