CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INTEGER(50) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,4) NULL,
    stock_quantity INTEGER(100) NULL,
	PRIMARY KEY (item_id)
  );
  
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("headphones", "electronics", 23.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chair", "home", 15.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("camera", "electronics", 150.75, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("notebook", "office supplies", 4.50, 99);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("leash", "pet supplies", 11.99, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("skillet", "kitchen", 11.29, 41);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee maker", "kitchen", 38.50, 29);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("area rug", "home", 356.45, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rake", "garden", 24.95, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("record player", "electronics", 478.20, 30);
-- 
SELECT * FROM products;