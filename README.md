This project was bootstrapped with [Angular]

## Available Scripts

In the project directory, you can run:

### `ng serve -o`

Runs the app in the development mode.<br />
Open [http://localhost:3003](http://localhost:3003) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Prerequisites

This project needs the following platforms installed and configured in order to work:

1. **Node.js**: This platform has been tested with the version `12.13.0` 
2. **MySQL**: This platform has been tested with the version `8.0` 

#### Database creation
Please execute the commands included in the file [rocknpediaDB.sql](\rocknpedia\server\config).
The default connection parameters are as follows:
````
host: 'localhost',
user: 'root',
password: 'root',
database: 'rocknpedia'
````

### Installing

1. **Server**

Go to the folder `server` and run the following commands

```
npm install
set PORT=3003
npm start
```

The server should be running then.

1. **Client**

Go to the folder `client` and run the following commands

```
npm install
npm start
```

The client should then be running on the default port _(localhost://3003)_

## Built With

### Client

* [CRA](https://github.com/facebook/create-react-app) - Create React Application
* [Angular](https://angular.io/)
* [Bootstrap](https://getbootstrap.com/) - an open source toolkit for developing with HTML, CSS, and JS.
* [ckEditor](https://ckeditor.com/ckeditor-4/) - an open source toolkit adding Rich Text Format text.
* [starRating](https://www.npmjs.com/package/react-star-ratings) - an open source toolkit that allows to implement a typical stars based rating.


### Server
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [JWT](https://jwt.io/) - JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.


## Authors

**Emilio Sánchez Cuadros**(https://github.com/Emilio-Sanchez-Cuadros)
