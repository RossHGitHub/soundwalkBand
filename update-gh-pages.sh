#!/bin/bash

set -e

# Ensure you are on the main branch
git checkout main

# Build your project to generate the dist folder
# Add your build command here if needed

# Switch to the gh-pages branch
git checkout gh-pages

# Remove existing contents
git rm -r .

# Checkout main's dist folder into gh-pages branch
git checkout main -- dist

# Move dist contents to root
mv dist/* .

# Remove empty dist directory
rm -r dist

# Add and commit changes
git add .
git commit -m "Update gh-pages with latest dist from main"

# Push changes
git push origin gh-pages --force
