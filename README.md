# PhoneListApp
This project has been created by Mariola Moreno. It's a phone listing created with Angular and using Redux (ngxr for state management).

## Run in development mode
1. Install dependencies with `npm install`;

2. You have to run the server to provide the REST API to the application. To run the server you have to type `node server.js` in the root and then, the app will have the mock data in the route `localhost:8080/phones` The app use a Rest Api created in node.js (you can find it in the file "server.js").

3. Run `npm run start` and go to `http://localhost:4200/`.  

## Build for production
If you want to build the app for production you have to type `ng build -prod` or `npm run build`. Remember that you need the dependecies installed. 

## Important note about load data from http request or from store
First time the app runs, the data is loaded from an http request to the rest api (remember to run `node server.js`). In the server ('server.js'). The server has been forced to return the data with a delay of 1.5 seconds.

In the toolbar you can find two links, both of them load the same component, but this time, instead of make a request to server, the data will be load from store. If you reload the app, the data wil be load from a http request again.

![Toolbar](https://raw.github.com/marosca/phonelistapp/master/picture.jpg)

## Docker image
You can find the docker image in https://hub.docker.com/r/marosca/phonelistapp/
To run image remember not to use port 8080 (the project use an api serve in that port). Fe:

`docker pull marosca/phonelistapp`

`docker run -i -t -p 3000:80 phonelistapp:latest`

Note: I've included Dockerfile in the root directory to take a look
