# fibonacho

Prerequisites:

- Node and npm installed. (Tested to work with node v14.17.5.)
- Username for the dev app is: **sala** and password is: **kala**
- Live demo available [here](https://elokuvaaja.fi/fibonacho)

ASSIGNMENT NOTES:

- You can see UI plans at this [Figma-project](https://www.figma.com/file/fqxvflN1E286qBIdpWR4N3/Fibonacho?node-id=15%3A154)
- UI plans can also be found [here](./UI-Suunnitelmat.pdf) in a PDF format.

## Project structure quick tour guide

- App.vue in /src is the root component housing router view, nav etc.
- ./src/views contain login and main view for this app
- ./src/components contain individual vue components
- ./src/router contains router configuration
- ./src/store contains index.js which confiqs Vuex store and imports individual store modules containing actual state management logic
  - login.js contains user login/logout state management
  - calculation.js contains all else state management in regards to fibonacci calculation etc.
- variables.scss in ./src root contains colors, font sizes and breakpoint for easy import into components

## Project setup

```
npm install
```

### Compile dev build and start dev server

```
npm run serve
```
