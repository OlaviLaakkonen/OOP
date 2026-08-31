const course = {
  name: "TS",

  changeName() {
    this.name = "JS";
  }
};

function changeCourse(obj) {
  obj.changeName();
}

changeCourse(course);

console.log(course);
// { name: "JS", changeName: [Function: changeName] }
