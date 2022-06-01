# A Cronly API wrapper

![npm (scoped)](https://img.shields.io/npm/v/@coenschutte/npm-cronly-wrapper?color=blue)

This is a basic API wrapper for Cronly

## Installation

You can install the package via npm:

```bash
npm i @coenschutte/npm-cronly-wrapper
```

## Usage

```js
const Cronly = require("@coenschutte/npm-cronly-wrapper");

var cronly = new Cronly(apikey);

cronly
  .getAllCertificates()
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## Credits

- [Coen Schutte](https://github.com/CoenSchutte)
- [All Contributors](../../contributors)
