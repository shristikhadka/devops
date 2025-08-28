exports.fibonacci = function(n) {
    if(n==0 || n==1)
        return n;
    return this.fibonacci(n-1) + this.fibonacci(n-2);
}

exports.factorial = function(n) {
    if (n < 0) {
        return undefined; // new feature: no factorial for negatives
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}