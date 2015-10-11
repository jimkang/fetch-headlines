test:
	node tests/live/live-tests.js

pushall:
	git push origin master && npm publish
