#Creo la base de datos
DROP DATABASE IF EXISTS XARXAMUJERES;
CREATE DATABASE XARXAMUJERES;
USE XARXAMUJERES;
#Creo las tablas

create table `Associated`(
	`Date` datetime not null,
    `Name` varchar(45) not null,
    `Photo` mediumblob null,
    `PC` integer,
    `Loc`varchar(45),
    `Prov`varchar(45),
    `ID`varchar(45) not null,
    `BirthDate`date not null,
    `DisabDeg`integer not null,
    `DisabType`varchar(45) not null,
    `Phone`varchar(12) null,
    `Mail`varchar(50) null,
    primary key(`ID`)
    );

    create table `Employee`(
    `Email` varchar(45) not null,
	`Name` varchar(45) not null,
    `Password` varchar(45) not null,
    `Profile/Position` varchar(45) not null,
    `Photo` mediumblob not null,
	primary key(`Email`)
);

create table `Session`(
	`File` mediumblob not null,
    `Type` varchar(45),
    `StartDate` datetime not null,
    `EndDate` datetime not null,
    `Author` varchar(45) not null,
    `Comment` VARCHAR(255),
    `Associated` varchar(45) not null,
	primary key (`Associated`, `StartDate`),
	foreign key (`Associated`) references Associated(`ID`),
	foreign key (`Author`) references Employee(`Email`)
);

CREATE TABLE `Activities`(
	`id_act` INT AUTO_INCREMENT NOT NULL,
	`owner` VARCHAR(45) NOT NULL,
	`name` VARCHAR(45) NOT NULL, 
	`duration` INT(3) NOT NULL,
	`startDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`endDate` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY(`owner`) REFERENCES Employee(`ID`),
	PRIMARY KEY(`id_act`)
);

CREATE TABLE `Members_activities`(
	`Associated` VARCHAR(45) NOT NULL,
	`activity` INT NOT NULL,
	FOREIGN KEY(`Associated`) REFERENCES Associated(`ID`),
	FOREIGN KEY(`activity`) REFERENCES Activities(`id_act`),
	UNIQUE(`Associated`, `activity`)
);

CREATE TABLE `Employees_activities`(
	`Employee` VARCHAR(45) NOT NULL,
	`activity` INT NOT NULL,
	FOREIGN KEY(`Employee`) REFERENCES Employee(`Email`),
	FOREIGN KEY(`activity`) REFERENCES Activities(`id_act`),
	UNIQUE(`Employee`, `activity`)
);



