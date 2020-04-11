class PGroup {
  constructor() {
    this.group = [];
  }

  add(value) {
    const newGroup = new PGroup();

    if (this.group.indexOf(value) === -1) {
      // this.group.push(value);
      this.group.forEach((element) => newGroup.add(element));
    }
    return newGroup;
  }

  delete(value) {
    const index = this.group.indexOf(value);
    if (index !== -1) {
      this.group.splice(index, 1);
    }
  }

  has(value) {
    return this.group.indexOf(value) !== -1;
  }
}

let a = PGroup.empty.add('a');
let ab = a.add('b');
let b = ab.delete('a');

console.log(b.has('b'));
// → true
console.log(a.has('b'));
// → false
console.log(b.has('a'));
// → false
