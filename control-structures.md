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

### USe more Errors & Error handling
Is something is an error make it an error.

💩
```js
if(!isEmail) {
  return {
    code: 422,
    message: 'Invalid input'
  };
}
```

✅
```js
if(!isEmail) {
  const error = new Error('Invalid input');
  error.code = 422;
  throw error;
}
```
