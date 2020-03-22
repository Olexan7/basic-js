module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let amountDepth = 1;
    let maxDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        amountDepth += this.calculateDepth(arr[i]);
        if (amountDepth > maxDepth) maxDepth = amountDepth;
        amountDepth = 1;
      }
    }
    return maxDepth;
  }
};
