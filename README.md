# getParameterByName

[Stackoverflow answer](https://stackoverflow.com/a/901144/6451184) packaged as NPM package.

## Usage

### Get query parameter from url
```js
import getQueryParameterByName from './index';

const url = 'https://www.example.com/search?q=nodejs';

const queryParameterValue = getQueryParameterByName('q', url);
```

If no second parameter is set, window.location.href is used.