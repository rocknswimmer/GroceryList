# Grocery List

**<span style="text-decoration:underline;">Overview:</span>**

App built to allow users to track inventory of items on hand and a create grocery list for items needed

[Deployed Demo](http://44.197.151.146:3023)


**<span style="text-decoration:underline;">Installation and Set up:</span>**

1. Run npm install to install dependencies
2. Create a .env file and fill in the the following information that pertains to your database instance.
  PGUSER = ''
  PGHOST = ''
  PGDATABASE = ''
  PGPORT = ''
  PGPASSWORD = ''
3. Seed the database by running \i filepath; with the file path being the path to the seed.sql file in the database directory of this project
4. Run npm run build for the project to be bundled for use
5. Run npm run server and your server should no be running on port 3023
6. You can not view the app at [Site Link](http://localhost:3023/)

**<span style="text-decoration:underline;">Walkthrough:</span>**

The database directory contains the seed file for the database

The pubilc directory contains the bundles, component styles, and the index.html

The server directory contains the index file for the server, requests are organized by type with comments indicating which types are below.

The src directory contains the source code for all of the components of the application

**<span style="text-decoration:underline;">App:</span>**



