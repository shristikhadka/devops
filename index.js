exports.factorial = function(n) {
    if (n < 0) {
        return undefined; // negative factorial not allowed
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

exports.fibonacci = function fibonacci(n) {
    if (n < 0) {
        return undefined; // negative fibonacci not allowed
    }
    if (n === 0 || n === 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // 👈 recursive call directly
};
