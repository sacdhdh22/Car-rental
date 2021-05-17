Tables
1: car_details
2: car_pricing
3: user
4: booking

Have added the schema structure for the following tables. 


CREATE TABLE `car_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `carLicenseNumber` varchar(255) NOT NULL,
  `model` varchar(255) DEFAULT '',
  `manufacturer` varchar(255) DEFAULT '',
  `model_version` varchar(255) DEFAULT '',
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `active_idx` (`active`),
  KEY `carLicenseNumber_idx` (`carLicenseNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;


CREATE TABLE `car_pricing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `base_price` int(20) DEFAULT NULL,
  `security_deposit` int(20) DEFAULT NULL,
  `php` int(20) DEFAULT NULL,
  `fk_id_car_details` int(11) DEFAULT NULL,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `active_idx` (`active`),
  KEY `fk_id_car_details_foreign_key` (`fk_id_car_details`),
  CONSTRAINT `fk_id_car_details_foreign_key` FOREIGN KEY (`fk_id_car_details`) REFERENCES `car_details` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;


CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `blocked` tinyint(4) NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT '',
  `mobile` bigint(10) NOT NULL,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `active_idx` (`active`),
  KEY `mobile_idx` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

CREATE TABLE `booking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `toDate` datetime NOT NULL,
  `fromDate` datetime NOT NULL,
  `fk_id_car_details` int(11) DEFAULT NULL,
  `fk_id_user` int(11) DEFAULT NULL,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_id_car_details_foreign` (`fk_id_car_details`),
  KEY `fk_id_user_foreign_key` (`fk_id_user`),
  KEY `active_idx` (`active`),
  CONSTRAINT `fk_id_car_details_foreign` FOREIGN KEY (`fk_id_car_details`) REFERENCES `car_details` (`id`),
  CONSTRAINT `fk_id_user_foreign_key` FOREIGN KEY (`fk_id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

