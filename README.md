# map-marker
React app that loads a google map with markers from external source

## About

This App places markers on a map. The markers come from an external JSON source. The url which is used to get the markers can be customised in the .env file. The markers can be clicked on to show the country they are placed in.

## Config

Before running the app the .env file must be created in the projects root directory. Two properties are required, a Google API key which can be obtained from a Google  developer account, this grants access to the google maps api. Also the URL for the marker JSON data.

```dosini
REACT_APP_GOOGLE_API_KEY=apikey
REACT_APP_MARKER_URL=http://localhost:3000/markers
```

Expected Marker JSON Format

```JSON
[
  {
    "name": "Belarus",
    "capital": "Minsk",
    "latitude":53,
    "longitude":28
  },
  {
    "name": "Sweden",
    "capital": "Stockholm",
    "latitude":62,
    "longitude":15
  }
 ]
 ```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

## Improvements
- Add a list of the markers
- Select markers on the list to focus on the map
- Mock the Google API so the map component can be tested
- Securely store the API key as this may still be accessible 

