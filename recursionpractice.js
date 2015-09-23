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
function subset(capacity, items){
	if (capacity <= 0 || items.length == 0)
		{return 0;}
	else if (items[0] > capacity){
		return subset(capacity, items.slice(1));
	}
	else {
		loseIt = subset(capacity, items.slice(1));
		useIt = items[0] + subset(capacity - items[0], items.slice(1));
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

//recursively recreate an implemenation of filter
function recursiveFilter(test, list) {
	var x = [];
	if (list[0] == undefined) {
		return [];
	} else if (test(list[0])) {
		return x.concat(list[0], recursiveFilter(test, list.slice(1)));
	} else {
		return recursiveFilter(test, list.slice(1));
	}
}

//reverse an array, including elements in any lower level arrays...recursively
function recursiveDeepReverse(list){
	if (list[0] == undefined) {
		return [];
	} else if (!Array.isArray(list[0])){
		if (!Array.isArray(list[1])) {
			return recursiveDeepReverse(list.slice(1)).concat(list[0]);
		} else {
			return recursiveDeepReverse(list.slice(2)).concat(recursiveDeepReverse(list.slice(1)).concat(list[0]));	
		}
	} else if (Array.isArray(list[0])){
		return [recursiveDeepReverse(list[0].slice(1)).concat(list[0][0])];
	}
}

//scrabble score finder. recurseively, but of course.
var scrabbleScores = [ ["a", 1], ["b", 3], ["c", 3], ["d", 2], ["e", 1], ["f", 4], ["g", 2], ["h", 4], ["i", 1], ["j", 8], ["k", 5], ["l", 1], ["m", 3], ["n", 1], ["o", 1], ["p", 3], ["q", 10], ["r", 1], ["s", 1], ["t", 1], ["u", 1], ["v", 4], ["w", 4], ["x", 8], ["y", 4], ["z", 10] ]
function letterScore(letter, scoreList){
	if (letter == scoreList[0][0]){
		return scoreList[0][1];
	} else {
		return letterScore(letter, scoreList.slice(1));
	}
}

//does the same thing, but for a WHOLE WORD 
function wordScore(word, scoreList){
	if (word[0] == undefined){
		return 0;
	} else if (word[0] == scoreList[0][0]){
		return (scoreList[0][1]) + wordScore(word.slice(1), scoreList);
	} else {
		return wordScore(word, scoreList.slice(1).concat([scoreList[0]]));
	}
}

//returns the minimum number of coins required to make change for a given amount with a given set of coins 
//and coin values
function change(amount, coins){
	if (amount == 0){
		return 0;
	} else if (coins.length == 0 && amount > 0){
		return Infinity;
	} else if (coins[0] > amount){
		return change(amount, coins.slice(1));
	} else {
		var loseIt = 0 + change(amount, coins.slice(1));
		var useIt = 1 + change(amount - coins[0], coins);
		return Math.min(loseIt, useIt);
	}
}

//returns the minimum number of coins and the actual set of coins required to make change for a given amount with a 
//given set of coins and coin values
function giveChange(amount, coins){
	if (amount === 0){
		return [0,[]];
	} else if (coins.length === 0 && amount > 0){
		return [Infinity,[]];
	} else if (coins[0] > amount){
		return giveChange(amount, coins.slice(1));
	} else {
		var loseIt = giveChange(amount, coins.slice(1));
		var useIt = giveChange(amount-coins[0], coins);
		if (1 + useIt[0] > loseIt[0]){
			return loseIt;
		} else {
			return [1 + useIt[0], useIt[1].concat(coins[0])];
		}
	}
}
