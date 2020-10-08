create database register;
create table users1(

    id serial primary key,
    name varchar(100) not null,
    company varchar(100) not null,
    department varchar(100) not null,
    designation varchar(100) not null,
    contact int not null,
    email varchar(100) unique not null,
    password varchar(100) not null
);