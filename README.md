# Zonky intro task

## Running the project

To run the project simply checkout the repo and open the **index.html** file.

Beacause of CORS, a browser with disabled security is required.
This can be done e.g. by running a command like this:

```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:/ChromeDevSession"`
```

(change the chrome path to your own installation path)

## Testing
To run tests, Karma is required. To install Karma and it's dependencies, run

```
npm i
```

then to start the test suite

```
npm run test
```