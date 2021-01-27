// Create something that can store data

// key and value

// class MovingAverage {
//   constructor(size) {
//     this.SIZE = size
//     this.sum = 0;
//     this.array = [];
//     this.windowStart = 0;
//     this.windowEnd = 0;
//   }


class Object {
  constructor(length) {
    this.data = {}
    this.length = length
    this.arr = []
  }

  push(key, value) {
    if (this.length > 0) {
      if (!this.data[key]) {
      this.data[key] = value;
      this.length --;
      this.arr.push(key);
      }
    } else {
      if (!this.data[key]) {
      delete this.data[this.arr.shift()]
      this.data[key] = value;
      this.arr.push(key);
      }
    }
  }
};


const obj = new Object(2);



obj.push('hello', 'hi')
obj.push('bye', 'bi')
obj.push('coffee', 'cup')
obj.push('anthony', 'lin')
obj.push('anthony', 'taing')


console.log(obj);