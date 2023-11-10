## Control structures 🔨

### Guards & fail fats
Is a way to better structure the failing cases.

💩
```js
if(email.includes('@')) {
  // rest of code
}
```

✅
```js
if(!email.includes('@')) { // this is a guard
  return; // this is a fail fast
}
// rest of code
```
