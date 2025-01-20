DROP TABLE IF EXISTS groceryUsers;
DROP TABLE IF EXISTS groceryList;
DROP TABLE IF EXISTS groveryInventory;

CREATE TABLE groceryUsers (
  user INT NOT NULL DEFAULT NULL PRIMARY KEY
);

CREATE TABLE groceryList (
  user NOT NULL DEFAULT NULL REFERENCES groceryUsers (user),
  item VARCHAR(100) NOT NULL DEFAULT NULL,
  quantity INT NOT NULL DEFAULT NULL,
  units VARCHAR(100) NOT NULL DEFAULT NULL

);

CREATE TABLE groceryInventory (
  user NOT NULL DEFAULT NULL REFERENCES groceryUsers (user),
  item VARCHAR(100) NOT NULL DEFAULT NULL,
  quantity INT NOT NULL DEFAULT NULL,
  units VARCHAR(100) NOT NULL DEFAULT NULL,
  itemLocation VARCHAR(100) NOT NULL DEFAULT NULL,
  expires VARCHAR(100) NOT NULL DEFAULT NULL, --maybe make a date

);