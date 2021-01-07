
-- burgers_db is the name of the localhost db, the string of characters is the name of the jawsdb database.
DROP DATABASE IF EXISTS zp2so97sopj9emsm.burgers;
CREATE DATABASE zp2so97sopj9emsm.burgers;

USE zp2so97sopj9emsm.burgers;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN NOT NULL,

  PRIMARY KEY (id)
);
