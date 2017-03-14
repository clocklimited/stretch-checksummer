# stretch-checksummer

## Usage
```js
var key = 'yourKey'
  , id = 'theID'
  , stretchChecksummer = require('stretch-checksummer')(key)
  , checksum = stretchChecksummer(id)

console.log(checksum)
```

### Optionally set the date format

By default the checksum will be generated using the "YYYYMMDD" format, this can
be overwritted via an optional argument.

```js
var key = 'yourKey'
  , id = 'theID'
  , dateFormat = "MMDDYYYY"
  , stretchChecksummer = require('stretch-checksummer')(key)
  , checksum = stretchChecksummer(id, dateFormat)

console.log(checksum)
```
