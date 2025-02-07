# Grocery List

**<span style="text-decoration:underline;">Overview:</span>**

App built to allow users to track inventory of items on hand and a create grocery list for items needed

[Deployed Demo](http://44.197.151.146:3023)


**<span style="text-decoration:underline;">Installation and Set up:</span>**

1. Run npm install to install dependencies
2. Create a .env file and fill in the the following with the information that pertains to your database instance.
  *PGUSER = ''
  *PGHOST = ''
  *PGDATABASE = ''
  *PGPORT = ''
  *PGPASSWORD = ''
3. Seed the database by running \i filepath; with the file path being the path to the seed.sql file in the database directory of this project
4. Run npm run build for the project to be bundled for use
5. Run npm run server and your server should now be running on port 3023
6. You can now view the app at [http://localhost:3023/](http://localhost:3023/)

**<span style="text-decoration:underline;">Walkthrough:</span>**

The database directory contains the seed file for the database

The pubilc directory contains the bundles, component styles, and the index.html

The server directory contains the index file for the server, requests are organized by type with comments indicating which types are below.

The src directory contains the source code for all of the components of the application

**<span style="text-decoration:underline;">App:</span>**

This is the main body of the application.

The first important components to consider are the ThemeProvider and Global Styles components. These components take the theme from Themes.js and apply them depending on whether light or dark mode are active. The controls for the mode are contained in the next important component, the header.

The Header contains the title of the application, the light/dark mode button, and once logged in the navigation buttons for the site. The default view is the inventory view, with the Inventory and Grocery List buttons switching between the two main views of the app. The logout button returns you to the login view if you want to change which users lists you are seeing.

The last two components are the Inventory and Grocery components. These are what get switched between depending on which view you are currently in.

In addition to handling the login funciton and switching views, the App component also calls the get requests for the inventory and grocery lists so that both lists can be updated from either the Inventory or Grocery component as needed.

**<span style="text-decoration:underline;">Inventory and Grocery:</span>**

These two components have a similar design with the main difference being Inventory has a add to grocery list funciton and Grocery has a recieve into inventory funciton.

These compnents take their respective lists and map them into either InventoryItem or GroceryItem components, these contain the items information, and the buttons needed to specify which item is being updated, deleted, revieved or added to the grocery list depending on the current funtion mode.

The fucitonality to add, update, delete, recieve or add to grocery list are controlled by buttons in the Footer/IFooter components(IFooter for the Inventory components footer).The add button of the footer will open a modal for the form needed to add an item to the database. The other buttons all turn on thier respective mode which makes the appropriate buttons appear next to each Item.