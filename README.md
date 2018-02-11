# getParameterByName

[![Build Status](https://travis-ci.org/theel0ja/getParameterByName.svg?branch=master)](https://travis-ci.org/theel0ja/getParameterByName)

[Stackoverflow answer](https://stackoverflow.com/a/901144/6451184) packaged as NPM package.

## Usage

### Use in browser
```html
<script src="https://unpkg.com/getparameterbyname/dist/bundle.min.js"></script>

<script>
  const url = 'https://www.example.com/search?q=nodejs';

  const queryParameterValue = getQueryParameterByName('q', url);

  // Print queryParameterValue to console
  console.log(queryParameterValue);
</script>
```

### Get query parameter from url
```js
import getQueryParameterByName from 'getqueryparameterbyname';

const url = 'https://www.example.com/search?q=nodejs';

const queryParameterValue = getQueryParameterByName('q', url);
```

If no second parameter is set, window.location.href is used.