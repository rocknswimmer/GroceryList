DROP TABLE IF EXISTS grocery_list;
DROP TABLE IF EXISTS grocery_inventory;
DROP TABLE IF EXISTS grocery_users;

CREATE TABLE grocery_users (
  user_num INTEGER UNIQUE NOT NULL DEFAULT NULL
);

CREATE TABLE grocery_list (
  id SERIAL PRIMARY KEY,
  user_num INTEGER NOT NULL DEFAULT NULL REFERENCES grocery_users (user_num),
  item VARCHAR(100) NOT NULL DEFAULT NULL,
  quantity INTEGER NOT NULL DEFAULT NULL,
  units VARCHAR(100) NOT NULL DEFAULT NULL
);

CREATE TABLE grocery_inventory (
  id SERIAL PRIMARY KEY,
  user_num INTEGER NOT NULL DEFAULT NULL REFERENCES grocery_users (user_num),
  item VARCHAR(100) NOT NULL DEFAULT NULL,
  quantity INTEGER NOT NULL DEFAULT NULL,
  units VARCHAR(100) NOT NULL DEFAULT NULL,
  item_location VARCHAR(100) NOT NULL DEFAULT NULL,
  expires VARCHAR(100) NOT NULL DEFAULT NULL
);

insert into grocery_users (user_num) values (100);
insert into grocery_users (user_num) values (23);

-- insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Milk', 1, 'Gallon', 'Fridge', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Eggs', 1, 'Dozen', 'Fridge', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Butter', 4, 'Sticks', 'Fridge', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Bread', 2, 'Loaves', 'Bread Box', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Pepper', 1, 'Grinder', 'Spice Rack', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Sea Salt', 1, 'Grinder', 'Spice Rack', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Garlic Powder', 1, 'Shaker', 'Spice Rack', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Onion', 3, 'Whole', 'Vegitable Basket', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Crushed Tomatoes', 2, 'Cans', 'Pantry', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Tomatoe Paste', 1, 'Cans', 'Pantry', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Ground Chicken', 1, 'LBS', 'Fridge', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Hot Italian Sausage', 1, 'LBS', 'Fridge', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Bread Crumbs', 1, 'Container', 'Pantry', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Spagetti', 1, 'Boxes', 'Pantry', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Garlic Bread', 1, 'Loaves', 'Freezer', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Applesauce', 6, 'Cups', 'Fridge', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Pita', 1, 'Packs', 'Bread Box', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Hummus', 1, 'Containers', 'Fridge', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Frozen Pizza', 1, 'Whole', 'Freezer', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Graham Crackers', 1, 'Boxes', 'Pantry', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Marsh Mellows', 1, 'Bags', 'Pantry', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Chocolate Bars', 6, 'Bars', 'Pantry', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, 'Napkins', 1, 'Packs', 'Lower Left Cabinet', '11/11/2030');

-- insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Milk', 1, 'Gallon');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Eggs', 1, 'Dozen');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Butter', 4, 'Sticks');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Bread', 1, 'Loaves');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Garlic Powder', 1, 'Shaker');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Onion Powder', 1, 'Shaker');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Onion', 4, 'Whole');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Crushed Tomatoes', 3, 'Cans');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Tomatoe Paste', 1, 'Cans');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Ground Chicken', 1, 'LBS');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Hot Italian Sausage', 1, 'LBS');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Bread Crumbs', 1, 'Containers');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Spagetti', 2, 'Boxes');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Garlic Bread', 2, 'Loaves');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Applesauce', 12, 'Cups');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Pita', 2, 'Pack');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Hummus', 1, 'Container');
insert into grocery_list (user_num, item, quantity, units) values (23, 'Frozen Pizza', 2, 'Whole');


