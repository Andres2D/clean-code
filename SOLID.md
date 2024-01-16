## SOLID Principles 🚩

### S: Single Responsibility
Classes should have a single responsibility and a class shouldn't change for more than one reason.

Violating SRP
```js
class ReportDocument {
  generateReport(data: any) {...}

  createPDF(report: any) {...}
}
```

Not violating SRP
```js
class User {
  login(email: string, password: string) {...}
  signUp(email: string, password: string) {...}
  assignRole(role: string) {...}
}
```

### O: Open Close
A class should be open for extension but close for modification

Violate Open Close: It needs to grow whenever we need to add a new functionality
```js
class Printer {
  printPDF(data: any) {...}

  printWebDocument(data: any) {...}

  printPage(data: any) {...}

  verifyData(data: any) {...}
}
```

Not violates the open close principle
```js
interface Printer {
  print(data: any);
}

class PrinterImplementation {
  verifyData(data: any) {}
}

class WebPrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print web document
  }
}

class PDFPrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print PDF document
  }
}

class PagePrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print real page
  }
}
```

### L: Liskov Substitution
Objects should be replaceable with instances of their subclasses without altering the behavior.


```js
class Bird {
  fly() {
    console.log('Flying...');
  }
}

class Eagle extends Bird {
  dive() {
    console.log('Diving...');
  }
}

const bird = new Bird();
bird.fly();

// Liskov substitution says if I change the class Bird for the subClasss Eagle I should get the same behavior of flying. Like this:

const eagle = new Eagle();
eagle.fly();

// But the problem is in this case, using a Penguin which is a bird, but clan't fly.

class Penguin extends Bird {
  // Problem: can't fly.
}

// Bird with a fly method works fine with birds that can fly, but don't work for birds which can't fly.
// The solution could be:

class FlyingBird {
  fly() {
    console.log('Flying...');
  }
}

```

### I: Interface segregation
Many client-specific interfaces are better than one general purpose interface.

Violates Interface Segregation, because the InMemoryDatabase doesn't need to apply a connect method. So the interface have a useless method.
```ts
interface Database {
  connect(uri: string);
  storedData(data: any);
}

class SQLDatabase implements Database {
  connect(uri: string) {...}

  storeData(data: any) {...}
}

class InMemoryDatabase implements Database {
  connect(uri: string) {...} // ???

  storeData(data: any) {...}
}

```

Not violates interface segregation because whe don't have useless methods.
```ts
interface Database {
  storeData(data: any);
}

interface RemoteDatabase {
  connect(uri: string);
}

class SQLDatabase implements Database, RemoteDatabase {
  connect(uri: string) {
    // connecting...
  }

  storeData(data: any) {
    // Storing data...
  }
}

class InMemoryDatabase implements Database {
  storeData(data: any) {
    // Storing data...
  }
}
```

### D: Dependency inversion
Should depend upon abstractions, not concretions.

Violating dependency inversion: I depend on the concrete implementation of the Database.
```ts
interface Database {
  storeData(data: any);
}

interface RemoteDatabase {
  connect(uri: string);
}

class SQLDatabase implements Database, RemoteDatabase {
  connect(uri: string) {
    // connecting...
  }

  storeData(data: any) {
    // Storing data...
  }
}

class InMemoryDatabase implements Database {
  storeData(data: any) {
    // Storing data...
  }
}

class App {
  private database: SQLDatabase | InMemoryDatabase;

  // I depend on the concrete implementation of the Database.
  constructor(database: SQLDatabase | InMemoryDatabase) {
    if(database instanceof SQLDatabase) {
      database.connect('my-url');
    }
    this.database = database;
  }

  saveSettings() {
    this.database.storeData('Some data');
  }
}
```


Not violates Dependency inversion: We force to the one who is instancing the class app to use the abstraction of the database what they need. 
```ts
interface Database {
  storeData(data: any);
}

interface RemoteDatabase {
  connect(uri: string);
}

class SQLDatabase implements Database, RemoteDatabase {
  connect(uri: string) {
    console.log('Connecting to SQL database!');
  }

  storeData(data: any) {
    console.log('Storing data...');
  }
}

class InMemoryDatabase implements Database {
  storeData(data: any) {
    console.log('Storing data...');
  }
}

class App {
  private database: Database;

  constructor(database: Database) {
    this.database = database; 
  }

  saveSettings() {
    this.database.storeData('Some data');
  }
}


const sqlDatabase = new SQLDatabase();
sqlDatabase.connect('my-url');
const app = new App(sqlDatabase);
```
