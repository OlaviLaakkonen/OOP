const a = 7
let b = a
b = 8
console.log(a, b) // prints 7 8

const c = { course: "TS" }
const d = c
d.course = "JS"
console.log(c, d) // prints {course: 'JS'} {course: 'JS'}

const c = { 
    course: "TS", 
}
let d = c
d = { course: "JS" }
console.log(c, d) // prints {course: 'TS'} {course: 'JS'}

// create a method for the object which is changing the object's property.
// create a global function with a parameter, where the parameter is assigned to the defined object.
// from within the function change the object's property or invoke the object's method which changes the property.
// in the first and third case you assign a new value/object to the function parameter.