# iridescent [![NPM version](https://badge.fury.io/js/iridescent.png?branch=master)](https://npmjs.org/package/iridescent) [![Build Status](https://travis-ci.org/angleman/iridescent.png?branch=master)](https://travis-ci.org/angleman/iridescent/builds) [![Dependency Status](https://gemnasium.com/angleman/iridescent.png?branch=master)](https://gemnasium.com/angleman/iridescent) [![License](http://badgr.co/use/MIT.png?bg=%2343d100)](#licensemit)

Iridescent is all CSS dialogs, alerts and bubbles that require no javascript.


## Install :hammer:

```
npm install iridescent
```

## Usage :wrench:

```
var iridescent = require('iridescent');
iridescent({
	option: null
}, function(err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
```


## License: MIT :unlock:

Dependencies:

