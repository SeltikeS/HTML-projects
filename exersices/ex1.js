arr = [1, 4, 3, 0, 4, 5, 4]

console.log(arr.reduce((total, item) => total + !(item % 2) * Math.sqrt(item), 0))