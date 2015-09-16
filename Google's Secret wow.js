function inverse(n){
	return 1/n;
}

function recursiveFactorial(a){
	if (a == 0) {
		return 1;
	} else {
		return recursiveFactorial(a-1) * a;
	}
}

function natural(n){
	result = 1;
	for (i=1; i<=n; i++){
		result += (inverse(recursiveFactorial(i)));
	}
	return result;
}


function range(start, end, step){
	var range = [];
	for (i=start; i<end; i+=step){
		range.push(i);
	}
	return range;
}

function natural(n){
	return 1 + range(1,n,1).map(taylor).reduce(function(a,b){return a + b});
}

function taylor(x){
	return 1/(recursiveFactorial(x));
}

function factorial(n){
	var result = 1;
	for (i=1; i<=n; i++){
		result = result*i;
	}
	return result;
}

function mult(x,y){
	return x*y;
}

function rFactorial(n){
	return range(1,n+1,1).reduce(mult)
}

function sum(a,b){
	return a + b;
}

function mean(list){
	return list.map(function(x){return x/list.length;}).reduce(sum)
}