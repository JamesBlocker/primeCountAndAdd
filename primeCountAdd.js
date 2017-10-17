function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primesCount(num) {
  var primes = [];
  var i = 0;
  while (primes.length < num) {
    if (isPrime(i)) {
      primes.push(i);
      i++;
    } else {
      i++;
    }
  }
  return primes;
}

function sumOfNPrimes(num) {
  var numArray = primesCount(num);
  var result = 0;
  for (var i = 0; i < numArray.length; i++) {
    result += numArray[i];
  }
  return result;
}
