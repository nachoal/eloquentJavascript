/* eslint-disable max-classes-per-file */
/*

  ITERABLE GROUPS
  Make the Group class from the previous exercise iterable.
  Refer to the section about the iterator interface earlier in the chapter if
  you aren’t clear on the exact form of the interface anymore.

  If you used an array to represent the group’s members,
  don’t just return the iterator created by calling the Symbol.iterator method on the array.
  That would work, but it defeats the purpose of this exercise.

  It is okay if your iterator behaves strangely when the group is modified during iteration.

*/

class GroupIterator {
  constructor(group) {
    this.x = 0;
    this.group = group;
  }

  next() {
    if (this.x === this.group[this.group.length - 1])
      return { value: undefined, done: true };

    let value = {
      x: this.x,
      value: this.group[x],
    };
    this.x += 1;
    return { value, done: false };
  }
}
class Group {
  constructor() {
    this.group = [];
    this.x = 0;
    this.y = 0;
  }

  add(value) {
    if (this.group.indexOf(value) === -1) {
      this.group.push(value);
    }
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

  static from(iterableObject) {
    const group = new Group();

    iterableObject.forEach((element) => {
      group.add(element);
    });

    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c
