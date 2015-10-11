fetch-headlines
===============

Fetches headlines from Google News.

Installation
------------

    npm install fetch-headlines

Usage
-----

    var fetchHeadlines = require('fetch-headlines');
    var opts = {
      topic: 'computers',
    };
    fetchHeadlines(opts, logResults);

    function logResults(headlines) {
      console.log(headlines);
    }

Output:

    [ 
      'These 5 Kits Can Teach Kids About Computers and Coding',
      'Gift of computers gives hope to homeless',
      'What Infographics Looked Like Before Computers',
      'Programs on Mac computers and tablets at the library',
      'A major breakthrough has given these Australian engineers everything they need ...',
      'Hey Siri, What Did You Say? Why Computers Still Mispronounce Names',
      'Microsoft gave us a glimpse at what the future of computers could look like',
      'Quantum leap for computers',
      'More people now search Google on their phone than from their computers',
      'Computers for textbooks is exciting for education'
    ]

You can skip passing in a `topic` in opts to just get general news. You can also pass an instance of [iscool](https://github.com/jimkang/iscool) in the opts, if you want fetchHeadlines to use it filter headlines. e.g.:

    var createIsCool = require('iscool');

    var isCool = createIsCool({
      customBlacklist: [
        'spider',
        'spiders',
        'arachnids'
      ]
    });

    var opts = {
      topic: 'computers',
      isCool: isCool
    };
    fetchHeadlines(opts, logResults);

Tests
-----

Run tests with `make test`. (Warning: These are live tests that really use the Internet.)

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
