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