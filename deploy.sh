#!/bin/sh
gh_pages='gh-pages'

git branch -D $gh_pages
git push --delete origin $gh_pages

git branch $gh_pages
ng github-pages:deploy
