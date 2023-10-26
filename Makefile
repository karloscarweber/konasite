all:
	bundle exec jekyll serve
build:
	bundle exec jekyll build
deploy:
	git push origin main
