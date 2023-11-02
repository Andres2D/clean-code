## Naming 🔖
* Variables and constants: `nouns or short phrases with adjectives`
  * useData, isValid
* Functions and methods: `verbs or short phrases with adjectives`
  * sendData(), inputIsValid()
* Classes: `nouns or short phrases with nouns`
  * User {}, RequestBody {}

### Variables or objects
* For `Objects` ==> describe the value (user, database)
* For `Numbers` or Strings ==> describe the value (name, age)
* For `Booleans` ==> answer a true false question (isActive, loggedIn) 

### Functions & methods
* If `performs and operation` ==> Describe the operation (getUser(), send())
* If `computes a boolean` ==> Answer a tru/false question (isValid(), isPaid())

### Classes
* Describe the object (User, Customer, Student)

## Don'ts
`product.diePlease()` 💩
`product.remove()` ✅

`user.facePalm()` 💩
`user.sendErrorMessage()` ✅

`message(n)` 💩
`message(newUser)` ✅

`ymdt = '20230612CET'` 💩
`dateWithTimeZone = '20230612CET'` ✅

`userList = { u1: ..., u2: ... }` 💩
`userMap = { u1: ..., u2: ... }` ✅

`allAccounts = accounts.filter()` 💩
`filteredAccounts = accounts.filter()` ✅

```js
analytics.getDailyData(day); 💩
analytics.getDayData(); 💩
analytics.getRawDailyData(day); 💩
analytics.getParsedDailyData(day); 💩
``` 

```js
analytics.getDailyReport(day); ✅
analytics.getDataForToday(); ✅
analytics.getRawDailyData(day); ✅
analytics.getParsedDailyData(day); ✅
``` 
