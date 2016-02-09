test:
	node tests/twitter-source-tests.js

test-live:
	node tests/live/live-tests.js

pushall:
	git push origin master && npm publish
