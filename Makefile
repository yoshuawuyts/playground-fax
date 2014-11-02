all: start

start:
	@node make.js
	@open index.html
	@node node_modules/.bin/http-server \
		--cors
