function check(x, y, z) {
    return x + y == z || x * y == z || x / y == z || x - y == z;
}
console.log(check(10, 30, 300));
console.log(check(23, 30, 40));