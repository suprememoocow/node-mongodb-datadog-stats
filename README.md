# node-mongodb-datadog-stats

Write mongodb query performance statistics to Datadog

```shell
npm install mongodb-datadog-stats --save
```

```javascript
var mongodb = require('mongodb');
var mongoDogStats = require('mongodb-datadog-stats');


mongoDogStats.install(mongodb, {
  dogstatsClient: dogstatsClient, // Instance of `node-dogstatsd`.StatsD
                                  // if not specified, creates a new client which will communicate with
                                  // 127.0.0.1:8125
  metric: 'mongodb.query'         // Default is 'mongodb.client.query'
});

// All mongodb query times will be recorded as histograms to
// the metric.

// Errors will also incremenet `metric`.error

// Statistics will be tagged with the collection and the operation (findOne, find, update, etc)
```


# Licence

License
The MIT License (MIT)

Copyright (c) 2014, Andrew Newdigate

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


