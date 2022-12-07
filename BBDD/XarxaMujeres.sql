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
    `ID`integer auto_increment,
    `BirthDate`date not null,
    `DisabDeg`integer not null,
    `DisabType`varchar(45) not null,
    `Phone`varchar(12) null,
    `Mail`varchar(50) null,
    primary key(`ID`)
    );
create table `ProffesionalOrientation`(
	`File` mediumblob not null,
    `ModifiedTime` datetime not null,
    `Author` varchar(45),
    `Comment` varchar(200),
    `Associated` integer,
	primary key (`Associated`, `ModifiedTime`),
    foreign key (`Associated`) references Associated(`ID`)
);