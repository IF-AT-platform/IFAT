#Immediate feedback assessment technique (IF-AT) platform

##Project structure
- client/src:
    - components : React components for the user interface
- index.js : point of entry
- routes : includes the API end points definition
- models : Mongoose database Schemas

##Project setup
 
Go to your root folder and create a .env file. Add the following code to your file (fyl the link is for connecting with MongoDB Atlas )
```angular2html
ATLAS_URI=mongodb+srv://test:test@cluster0.lprvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

##Getting started

To install all npm packages, go to the directory where ```package.json``` is loacted and run
```angular2html
npm install
```
To run the frontend, go into the client folder and run
```angular2html
npm start
```
To run the backend, go into the root directory and run
```angular2html
nodemon server
```





 

