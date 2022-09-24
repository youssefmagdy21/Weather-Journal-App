# Weather Journal App Project

## Table of Contents

- [Project Title](#landing-page-project)
- [Table of contents](#table-of-contents)
- [Project Description](#project-description)
- [Installation](#installation)
- [Functionalities Implemented](#functionalities-implemented)
- [Usage](#usage)
- [Languages Used](#languages-used)
- [Resources](#helper-resources)

## Project Description

Weather Journal App with Asynchronous JavaScript

This project is developed to create an asynchronous web application that uses Web API and user data to dynamically update the UI in a Weather Journal Application

This project is part of the _Udacity Professional Front-End Web Development Nanodegree Program_

## Installation

1. Open the terminal and make sure Node.js is installed in your system using the following command, if not installed please refer to https://nodejs.org/ then download and install Node.js

```
$ node -v
v16.17.0
```

2. After installing Node.js, run the following command in the terminal to run the local server

```
$ cd weather-journal-app
$ node index.js
Server is running
Server started at port: 8000
```

3. After successfully running the local server, enter the following URL in your browser or simply click on it to load the Weather Journal App http://localhost:8000/

## Functionalities Implemented

> ### Server Side

1. Installing express to setup the server and web app

```
$ npm install express
```

```javascript
const express = require("express");
const app = express();
```

2. Express app configuration to use body-parser and CORS and to use static web pages

```
$ npm install body-parser
```

```
$ npm install cors
```

```javascript
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.use(express.static("public"));
```

3.  GET route configuration to send data to the browser (the client)

4.  POST route configuration to save data in the server

> ### Client Side

1. A Function to GET data from the OpenWeather Web API

2. A Function to POST required data to the server

3. A Function to GET required data from the server

4. A Function to update the UI with data retrieved from the server

5. A Function to take user input and call all other functions needed to show the results

6. A Function to reset user input and result output

## Usage

- **_Choose_** a country from the drop-down menu

- **_Enter_** the ZIP code for the area you want to know its current weather

- **_Feel Free_** to type how are you currently feeling 😄

- **_Press_** the **_`Generate`_** button to display the current `temprature` of the area specified by the `ZIP` code, as well as the name of the `city`, the current `date` and your `feelings`

- **_Press_** the **_`Reset`_** button if you wish to reset your input and the most recent entry

## Languages Used

- HTML
- CSS
- JavaScript
- Node & Express

## Resources

- Google Fonts

- OpenWeather Web API
