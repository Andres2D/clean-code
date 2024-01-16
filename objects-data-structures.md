## Objects & Data Structures 📦️

### Objects
Private internals properties, with methods. Contain business logic.

Ex:
```js
class Database {
  private uri: string;
  private provider: any;
  private connection: any;

  constructor(uri: string, provider: any) {
    this.uri = uri;
    this.provider = provider;
  }

  connect() {...}

  disconnect() {...}
}
```

### Data Containers
Public internals properties, almost without methods. Store and transport data.

Ex:
```js
class UserCredentials {
  username: string;
  password: string;
}
```
