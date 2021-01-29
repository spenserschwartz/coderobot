console.log('Hello Brian!');

// Spenser is typing here

class Object {
  constructor(length) {
    this.data = {};
    this.length = length;
    this.array = [];
    }
  
    insert (key, value) {
      if (this.length > 0) {
        // Insert in key value pair because there is room
        length--;
        // Manipulate the storage by adding this as most recenlty used. If it exists in array, update array and put it in the back
        if (this.data[key]) {
          // Splice off from current index and push to back
          this.array.push(this.array.splice(this.array.indexOf(key), 1 ) )
        } else this.array.push(key)
        // Update key value OR insert new key value
        this.data[key] = value;
        
      } else {
        // Remove LRU and then insert in key value pair as most recently used/updated
        delete this.data[this.array.shift()]
        
        
        if (this.data[key]) {
          // Splice off from current index and push to back
          this.array.push(this.array.splice(this.array.indexOf(key), 1 ) )
        } else this.array.push(key)
        
        // Insert in new key value;
        this.data[key] = value;
      }
    }
  }
  


// Get function (look into)

// Brian's recs >> keep length constant, check against length of array/object
// Use list over array for time notation

  
  const testObj = new Object(3);
  testObj.insert(11,111)
  testObj.insert(22,222)