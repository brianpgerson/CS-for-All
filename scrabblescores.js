var dictionary = ["a", "am", "at", "apple", "bat", "bar", "babble", "can", "foo", "spam", "spammy", "zzyzva"] 

var scrabbleScores = [ ["a", 1], ["b", 3], ["c", 3], ["d", 2], ["e", 1], ["f", 4], ["g", 2], ["h", 4], ["i", 1], ["j", 8], ["k", 5], ["l", 1], ["m", 3], ["n", 1], ["o", 1], ["p", 3], ["q", 10], ["r", 1], ["s", 1], ["t", 1], ["u", 1], ["v", 4], ["w", 4], ["x", 8], ["y", 4], ["z", 10] ]

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


function rackLetterInDictionaryWord(rackLetter, word){
	if (word[0] == undefined){
		return false;
	} else if (word[0] === rackLetter){
		return true;
	} else {
		return rackLetterInDictionaryWord(rackLetter, word.slice(1));
	}
}

function possibleWord(word, rack){
	if (word[0] == undefined){
		return true;
	} else if (rackLetterInDictionaryWord(word[0], rack)) {
		return possibleWord(word.slice(1), rack);
	}
}

function wordList(dictionary, rack){
	var scoreList = [];
	if (dictionary[0] == undefined){
		return [];
	}
	else if (possibleWord(dictionary[0], rack)) {
		return scoreList.concat([[dictionary[0], wordScore(dictionary[0], scrabbleScores)]], wordList(dictionary.slice(1), rack))
	} else{
		return wordList(dictionary.slice(1), rack);
	}
	console.log(scoreList);
}

function returnBestScoreOfPair(a, b){
	debugger;
	if (a[1] >= b[1]){
		return a;
	} else {
		return b;
	}
}

function sum(a, b){
	return a + b;
}

function bestWord(scoreList){
	debugger;
	return scoreList.reduce(returnBestScoreOfPair());
}
