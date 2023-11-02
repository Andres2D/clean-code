## Functions and Methods 🚧
Really avoid more than 3 parameters in a function.

```js
function add(a, b) { // arguments
  return a+b;
}

add(2,3) // Parameters.
```

Refactor functions with 3 or more than 3 parameters:

💩
```js
class User {
  constructor(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role;
  }  
}

const user = new User('Andres', 'andres2d@mail.com', 'developer');
```
This can be confusing due to the order of the parameters.
A better way:

✅
```js
class User {
  constructor(userObject) {
    this.name = userObject.name;
    this.email = userObject.email;
    this.role = userObject.role;
  }  
}

const user = new User({name: 'Andres', email: 'andres2d@mail.com', role: 'developer'});
```
This way we're just passing a single parameter and because is an object, the order doesn't matter.

