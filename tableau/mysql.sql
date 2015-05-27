DELETE FROMdelimiter $$

CREATE TABLE `products` (
  `id` INT NOT NULL,
  `category` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8$$

 `test`.`Products`

delimiter $$

CREATE  TABLE `test`.`customers` (
  `id` INT NOT NULL ,
  `name` VARCHAR(150) NULL ,
  `sex` VARCHAR(10) NULL ,
  `contactNumber` BIGINT NULL ,
  `email` VARCHAR(150) NULL ,
  `dob` DATE NULL ,
  PRIMARY KEY (`id`) );


delimiter $$

CREATE TABLE `regions` (
  `id` int(11) NOT NULL,
  `region` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8$$

delimiter $$

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `customerID` int(11) DEFAULT NULL,
  `regionID` int(11) DEFAULT NULL,
  `line1` varchar(45) DEFAULT NULL,
  `line2` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_addresses_1_idx` (`customerID`),
  KEY `fk_addresses_2_idx` (`regionID`),
  CONSTRAINT `fk_addresses_1` FOREIGN KEY (`customerID`) REFERENCES `customers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_addresses_2` FOREIGN KEY (`regionID`) REFERENCES `regions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB 

delimiter $$

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `customerId` int(11) DEFAULT NULL,
  `regionId` int(11) DEFAULT NULL,
  `timestamp` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fks_customerId_idx` (`customerId`),
  KEY `fks_productId_idx` (`productId`),
  KEY `fks_regionId_idx` (`regionId`),
  CONSTRAINT `fks_customerId` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fks_productId` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fks_regionId` FOREIGN KEY (`regionId`) REFERENCES `regions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8$$



LOAD DATA INFILE 'c:/tmp/discounts.csv' 
INTO TABLE discounts 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;