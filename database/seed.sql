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

insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');
insert into grocery_inventory (user_num, item, quantity, units, item_location, expires) values (23, '', , '', '', '11/11/2030');

insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');
insert into grocery_list (user_num, item, quantity, units) values (23, '', , '');


