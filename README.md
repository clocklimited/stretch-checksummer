# stretch-checksummer

[![Greenkeeper badge](https://badges.greenkeeper.io/clocklimited/stretch-checksummer.svg)](https://greenkeeper.io/)

## Usage
```js
var key = 'yourKey'
  , id = 'theID'
  , stretchChecksummer = require('stretch-checksummer')(key)
  , checksum = stretchChecksummer(id)
  
console.log(checksum)
```
