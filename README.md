# TBD

## Prerequisites

The following must be installed:
- Node.js
- npm
- MongoDB
- Gulp

## DotEnv support

DotEnv is a package that allows you to create environment variables that are not visible to the public.

After forking and cloning this project you can create a .env file in the root directory like so
```
touch .env
```

Then you must add the following configuration options to the file
```
SECRET=secretgoeshere
MONGO_URI=mongodb://localhost:27017/database
PORT=3000
```

You can completely avoid using this file if you would like in development, but it provides a way to keep all your necessary environment variables private. So I highly recommend it.

## Gulp

Gulp is used in this project for a few reasons. The only gulp tasks I have created are starting and watching the server using nodemon, and compiling sass into css. Here are the gulp commands available right now:
```
gulp // Runs default task which starts server and watches for changes using nodemon, and refreshes server when changes are made. And watches sass changes and compiles once changes are made. Keep this running when working on the project.

gulp compile-css // this compiles all the sass into a css file.
```
