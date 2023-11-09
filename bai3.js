// Tạo mảng có 100 phần tử toàn bộ là số 0
const zeroArray = Array.from({ length: 100 }, () => 0);

// Biến đổi mảng để có giá trị từ 0 đến 99
const numberArray = zeroArray.map((_, index) => index);

// Lọc ra những số chia hết cho 5
const multiplesOf5 = numberArray.filter(number => number % 5 === 0);

// Tính tổng những số còn lại
const sumOfRemaining = numberArray.filter(number => number % 5 !== 0).reduce((sum, number) => sum + number, 0);

console.log("Mảng với giá trị từ 0 đến 99:", numberArray);
console.log("Nhiều số chia hết cho 5:", multiplesOf5);
console.log("Tổng của các số còn lại:", sumOfRemaining);
