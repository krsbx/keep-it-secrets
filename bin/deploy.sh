#!/usr/bin/env sh

# Abort on errors
set -e

# Build the pages
npm run build

# Add dist folder to git
git add dist -f

# Deploy from main to gh-pages
git push -f git@github.com:krsbx/keep-it-secrets.git main:gh-pages
