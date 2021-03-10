module.exports = function reverse(n) {
  if (isNaN(n)) {
    throw new Error("Is not a number");
  } else {
    return parseInt(n.toString().split("").reverse().join(""));
  }
};
