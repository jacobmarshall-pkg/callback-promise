# @jacobmarshall/callback-promise

Instead of using a utility like Bluebird's promisify to create a version of function(s) which return a Promise, this utility allows you to create a special object which can be passed into a function which accepts a node-style callback, and can also be used as a Promise.

If that doesn't make sense, check out this "simple" example.

```js
import fs from 'fs';
import callbackPromise from '@jacobmarshall/callback-promise';

async function example() {
  const passwords = callbackPromise();
  fs.readFile('/etc/passwd', passwords);
  console.log('Passwords: ' + await passwords);
}

example();
```

# License

MIT