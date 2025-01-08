# Explanation of installing json-server

## Changes in package.json

In package.json it was:
`"server": "json-server --watch db.json --port 3001"`
Changed to:
`"start": "node server.js"`

## Converted server.js to use ES module instead of common ones.

## Installed json-server

`npm install json-server`

## Reinstalled dependencies

First:
`rm -rf node_modules package-lock.json`
Then:
`npm install`

All this did not work!!!!
