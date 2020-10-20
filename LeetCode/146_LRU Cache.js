class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

const obj = {};
const arr = [];

function get(string) {
  return obj[string];
};

