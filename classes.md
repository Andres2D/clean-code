## Classes 🍱
Classes should be small and have a single responsibility.

### Cohesion
How much are your class methods using the class properties. Maximum cohesion means all methods each esa all properties. And no cohesion is when all methods don't use any class properties (to avoid).
The ideal is to have highly cohesive classes.

### Law of demeter
Is about the principle of Least Knowledge: Don't depend on the internals of "strangers".

Ex:
We should avoid this in classes, it's okay in data structures though.
```js
this.customer.lastPurchase.date;
```

Code in a method may only access direct internals (properties and methods)
* the object it belong to
* objects that are stores in properties of that object
* objects which are received as methods parameters
* objects which are created in the method