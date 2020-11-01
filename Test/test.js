// 346 Leetcode
/*

Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.



MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
m.next(6) = (3 + 5 + 6) / 3


*/


class MovingAverage {
  constructor(size) {
    this.SIZE = size
    this.sum = 0;
    this.array = [];
    this.windowStart = 0;
    this.windowEnd = 0;
  }

  next(num) {
    // this.array.push(num);
    // if (this.array.length > this.SIZE) this.array.shift();
    // return this.array.reduce((a,b) => a + b, 0) / this.array.length;
    this.array.push(num);
    this.sum += num;
    this.windowEnd += 1;
    if (this.windowEnd > this.SIZE) {
      this.sum -= this.array[this.windowStart];
      this.windowStart += 1;
    }
    return this.sum / (this.windowEnd - this.windowStart);
  }
}


const next = num => {
  // Add digit to the running sum of all the numbers already in the window
  // If window size is already at num, then we shift off the first value and then add the digit
  // Then, divide the sum by the length of the window(array)

  
}





const m = new MovingAverage(3);
console.log(m.next(1)) // 1
console.log(m.next(3))
console.log(m.next(8))
console.log(m.next(4))
//console.log(m)