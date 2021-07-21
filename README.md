# Immediate feedback assessment technique (IF-AT) platform

## Project structure
- client/src:
    - components : React components for the user interface
- index.js : point of entry
- routes : includes the API end points definition
- models : Mongoose database Schemas

## MongoDB Altas setup
 
1. Create a ```.env``` file in the backend folder
2. Sign up for a free MongoDB Atlas account
3. Create a new project
4. Create a Cluster
5. Set Network Access to be 0.0.0.0/0
6. Create a new User and give them Read/Write/Admin permissions
7. Find the connection URI string:
   -> Clusters -> Connect -> Connect your application
   
   Note: Change the user and the password to match your User you just created
8. Copy the connection URI into ```.env```

    e.g. ```ATLAS_URI=connection URI```
    
And if you want, get https://docs.mongodb.com/manual/administration/install-community/ ! It will be very handy (and much less laggier than the browser version) when you are debugging.



## Getting started

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





 

