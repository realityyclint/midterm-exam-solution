function countProperties(obj) {
    return Object.keys(obj).length;
  }
  
  // Test cases
  console.log(countProperties({ a: 1, b: 2, c: 3 })); // Expected output: 3
  console.log(countProperties({})); // Expected output: 0