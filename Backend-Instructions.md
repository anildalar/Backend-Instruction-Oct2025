Backend Development



FullStack Development

1.Frontend Developmet (HTML/CSS/JS/ReactJs)

2.Backend Development (To Store Information)

3.DevOps.



Website

1\. Ecommere

Client Server Architecture



Client ------------>  Server

chrome(S/W) -------------> Server  + Database(S/W)

firefox

opera

ucbroser



Database  ?

Database are some software which store information permatnly



Types of Database

1.SQL Database

&nbsp;	Structured Query Language

&nbsp;	Eg

&nbsp;	MySQL/MariaDb,Postgres, SQL Server, MS Access, Oracle, Sybase, Informix, 





2\. NoSQL Database







https://w3school.com





SQL

Seequal









Anil ------->   Database



Stored

Manupulate







Anil -----> Sunil



Structured Query Language



CRUD Operations

1\. C = Create

2\. R = Read

3\. U = Update

4\. D = Delete









We want to learn backend Development/ Backend Eng.

1\. Database

&nbsp;	1.1 SQL Based Database

&nbsp;		1.1.1 MySQL

&nbsp;		1.1.2 Postgress

&nbsp;	1.2 NoSQL Based Database

&nbsp;		1.2.1 MongoDB

2\. Programing Language

&nbsp;	2.1 Javascript -> NodeJs

&nbsp;	2.2 Python

&nbsp;	2.3 Java

&nbsp;	2.4 DotNet

&nbsp;	2.5 PHP





You need to install SQL Software on your Laptop/Machine



Database (MySQL + SQL)



1\. XAMPP

&nbsp;	https://www.apachefriends.org/

&nbsp;	

2\. Open Shell

3\. # mysql -u user -pPassword

3\. # mysql -u root -pValue

&nbsp;    mysql.exe

&nbsp;  # cmd   -flag1 flag1value -flag2 -flag2Value

&nbsp;  # cmd   -arg1  arg1value   -arg2  -arg2Value	





Where you store your infomation ?

Database



Database   -> Tables  ->>> Data





Anil  ------>  Database





Database

&nbsp;	Table

&nbsp;		Data





Show all available Databases ?

SQL Command; ?



show databases;



; -> Semicolon

: -> colon





How to create your own database ?

CREATE DATABASE databasename;

create database a\_db;

create database b\_db;

.

.

create database z\_db;



I want to store some information in database ?

1\. Create database

&nbsp;	1.1  create database e\_db;

2\. Go Inside that database

&nbsp;	2.1 use <databaseName>;

3\. Create table

&nbsp;	3.1 Check how many table are there ?

&nbsp;		show tables;

&nbsp;	3.2  create table students\_tbl

4\. Describe table structure ?

&nbsp;	4.1 describe <tableName>;

&nbsp;	4.2 desc <tableName>;

&nbsp;	4.3 explain <tableName>;



5\. Insert data

&nbsp;	5.1 insert into <tableName>(C) values (V);

6\. Show the inserted data







Name   Surname	Aadhar	Address City State MobNo 

'Palak'

Aashtha











varchar(255)  -> Anil

char(255)     -> Anil





Todays Assignments

a\_db

&nbsp;	a\_tbl

&nbsp;		1 colum

&nbsp;		1 Recods

b\_db

&nbsp;	b\_tbl

&nbsp;		2 coloum

&nbsp;		2 Records

c\_db

&nbsp;	c\_tbl

&nbsp;		3 coloum

&nbsp;		2 Records	

..

z\_db

&nbsp;	z\_tbl

&nbsp;		26 coloumn

&nbsp;		26 Records



oklabs\_db



students\_tbl



Rolno Name	MobNo  Surname	 Aadhar	 Address	City	State	 

1      Palak

2      Aashtha

&nbsp;		

How to create database ?

Syntax ?



create database oklabs\_db;





How to add column to existing table ?



How to add a new Coloum in a table ?

alert

Where to add the column ?





Syntax ?

&nbsp;	alter table <tableName> add <newColumn> <dataType> after <existingColumn>



Example

&nbsp;	alter table students\_tbl add addr varchar(255) after surname;



&nbsp;	alter table students\_tbl add mobno varchar(255);



&nbsp;	alter table students\_tbl add rollno varchar(255) first;







How to check sql records/entries ?



Select









insert into tablename (C) values ('V');





insert into tablename (name) values ('ANIL');





insert into tablename (name) values ('palak');







alter table <tableName>  add/modify/drop <columname>



alter table students\_table drop mobno;







name 	-> firstname

surname -> lastname

&nbsp;	



alter table students\_table modify oldcolumn newcolumn datatype;

alter table students\_table change oldcolumn newcolumn datatype;









How to change column name temprorary ?

&nbsp;	select 

How to change column name permantly ?

&nbsp;	alter table students\_table change oldcolumn newcolumn datatype;





Alias

address   ->     addr





Syntax

&nbsp;	select \* from <tableName> order by <columnName> asc|desc limit offset,limit;



SQL Queries



1\. How you can get the last record of a table?

&nbsp;	select \* from employees\_tbl order by empId desc limit 1;	



google\_db

&nbsp;	employees\_tbl

&nbsp;		empId	empName	  salary  height		

&nbsp;		1.	Anil	10000	   5.6

&nbsp;		2.	Vijay	20000	   5.8

&nbsp;		3.	



2\. How you can get the second last record of a table?

3\. How much salary is distributed on monthly basis ?





function(actualArguemnt);

sum(salary)



Find the employee with the highest salary.

Lets take a real world example to learn SQL





JustDial.com is a online Directory



System Design

1\. HLD High Level Design

2\. LLD Low Level Design

&nbsp;	2.1 Database Structure Planning



xyzdial.com

&nbsp;	Database + tables + Structure





justdial\_db

&nbsp;	1. business\_categories

&nbsp;		id  bcname  

&nbsp;	2. businesses

&nbsp;		id  bname   bc\_id	





SupremeElectronic -> Electronics

USha Clinic	  -> Hospital

Gyanodaya College -> Education	











create table tableName(

&nbsp;	colum1 datatype constraint attributes

)







hotels     -> Hotel Bharat Palace

restaurant -> Hanuman Chat Center







How you can join table data ?

1\. Inner Join



Syntax



SELECT column\_name(s)

FROM table1

INNER JOIN table2

ON table1.column\_name = table2.column\_name;



select business.bname as 'Business Name',business\_categories.bc\_name as Category from business inner join business\_categories on business.bc\_id=business\_categories.id;







Online Business Directory



justdial\_db

&nbsp;	1. business\_categories

&nbsp;		id  bcname  

&nbsp;	2. businesses

&nbsp;		id  bname   bc\_id cities\_id 

&nbsp;	3. cities

&nbsp;		id name

&nbsp;	4. states

&nbsp;		id name cities\_id counties\_id

&nbsp;	5. countries

&nbsp;		id name

&nbsp;	6. users	





Supreme Electronics	Neemuch

Supreme Electronics 	Indore

Supreme Electronics	Delhi

ABC Electronics		Mumbai





alter table business add cities\_id int unsigned;





SQL Commands Types

1\. DDL

&nbsp;	drop (remove)

&nbsp;	1.1 drop database

&nbsp;	1.2 drop table

&nbsp;		test\_db -> test\_tbl

&nbsp;				id name

&nbsp;	1.3 drop table column

&nbsp;		test\_db -> test2\_tbl

&nbsp;				id name surname









Lets understand Inner Join



Question

Get all the hospitals of Neemuch ?



1\. Cities   	-> Neemuch

2\. Categories	-> hospital

3\. Business	-> Gyanodaya Multispecialty Hospital







select \* from table1 inner join table2 inner join table3 on table1.column=table2.column and table1.column=table3.column





&nbsp;select \* from business inner join business\_categories inner join cities on business.bc\_id=business\_categories.id and business.cities\_id=cities.id where business.bname like '%gyanodaya%';









tablename.columnname





Inner Join



table2		table1			table3

Country 	States			City

India		Madhya Pradesh		Indore

USA		California		San Francisco	

USA		Florida			Miami	



output Inner Join



table1

table2

table3



select \* from table1 inner join table2 inner join table3 on table1.column=table2.column and table3.column=table2.coloumn



select \* from states inner join countries inner join cities on states.countries\_id=countries.id and cities.states\_id=states.id;





columnName	DataType	Constraint 	Attribute

name		varchar(255)	unique



MariaDB \[justdial\_db]> select countries.name,states.name,cities.name from states inner join countries inner join cities on states.countries\_id=countries.id and cities.states\_id=states.id;

+-------+----------------+---------------+

| Country  | name           | name          |

+-------+----------------+---------------+

| India | Madhya Pradesh | Neemuch       |

| India | Madhya Pradesh | Indore        |

| India | Madhya Pradesh | Delhi         |

| India | Madhya Pradesh | Mumbai        |

| USA   | California     | San Francisco |

| USA   | Florida        | Miami         |

+-------+----------------+---------------+

6 rows in set (0.001 sec)







Client --requirement---> TCS/Wiporo/Infosys Justdial.com

Anil



SystemArchitech 10yrs-20Yrs







SystemDesign

&nbsp;	1. HLD -> HighLevelDesign

&nbsp;	2. LLD -> LowLevelDesign

&nbsp;		LLD is all about the planning of tables in database





1\. User can review the business

&nbsp;	1-5

2\. User can write the review about the business

3\. User can Post Images about the business







Requirement Docs  ----> SystemArchitech/BackendEng.

&nbsp;		  ----> UX/UI (Designer)  -> Figma/AdobeXD





justdial\_db

&nbsp;	1. business\_categories

&nbsp;		id  bcname  

&nbsp;	2. businesses

&nbsp;		id  bname   bc\_id cities\_id 

&nbsp;	3. cities

&nbsp;		id name

&nbsp;	4. states

&nbsp;		id name cities\_id counties\_id

&nbsp;	5. countries

&nbsp;		id name

&nbsp;	6. users

&nbsp;		id name surname

&nbsp;	7. reviews 

&nbsp;		id reviewContent  reviewStars business\_id users\_id review\_images\_id

&nbsp;		   varchar(255)    5

&nbsp;	8. review\_images

&nbsp;		id imagePath userId





? Who is giving review? users\_id

&nbsp; To whome he is giving review?  business\_id

&nbsp; What review he is giving?  reviewContent

&nbsp; How much stars he is giving ?  reviewStars

&nbsp; Can user upload Images ?	





reviewStars tinyint unsinged

&nbsp;	0-255

&nbsp;	5

reviewStars tinyint

&nbsp;	-128 to 127







Anil    ->   Supreme Ev    	   ->   5    Excellent   



Akash    -> Hotel Bharat Palace    ->   1    Very Bad







Inner Join with 3 tables



users

business

reviews table1







Employess



id	name	salary



a		1000

b

c		2000

d		3000

e		



2nd Higest Salary



select \* from tableName order by columnName asc|desc limit offset,limit;



select \* from employees order by salary desc limit 1,1;



Syntax ?



insert into tableName (C) values (V);



update tableName set coloumName=value,.. where someCondition















Employees



id	name		salary



1	a		1000

2	b		2000

3	c		3000

4	d		4000



id	name		tenpercentageOfSalary



1	a		100

2	b		200

3	c		300

4	d		400



select id,name,(salary/10) as tenpercentageOfSalary from employees;



DDL

&nbsp;	create

&nbsp;	drop

&nbsp;	alter

&nbsp;	truncate

DML

&nbsp;  insert

&nbsp;  update

&nbsp;  delete

DQL

&nbsp;  select

Roles :-

&nbsp;	System Roles :-





System Design



Client -----> Software

Mr X ---------> Justdial.com ---> Software



Backend Eng./System Architec





Backend System Roles



1\. System Roles



Hospital Management System

System Roles(User TYpes)

&nbsp;	0. Admin

&nbsp;	1. Doctor

&nbsp;	2. OPD incharge

&nbsp;	3. Management

&nbsp;	4. Patient



Ecommerce Platform

&nbsp;	1. Admin

&nbsp;	2. Customer

&nbsp;	3. Employees

&nbsp;	

Online Business Directory

&nbsp;	1. Admin -> Software Creator

&nbsp;	2. BusinessOwner

&nbsp;	3. Employees







Roles and Permission

RBAC = Role Based Access Control





justdial\_db

&nbsp;	1. business\_categories

&nbsp;		id  bcname  

&nbsp;	2. businesses

&nbsp;		id  	bname   	bc\_id 	cities\_id  users\_id

&nbsp;		o	Raj Saloon	1	1		2

&nbsp;	3. cities

&nbsp;		id name

&nbsp;	4. states

&nbsp;		id name cities\_id counties\_id

&nbsp;	5. countries

&nbsp;		id name

&nbsp;	6. users

&nbsp;		id 	name 	surname		roles\_id

&nbsp;		1	Anil	Dollor		1

&nbsp;		2. 	Manish 	Sn		2

e

&nbsp;	7. reviews 

&nbsp;		id reviewContent  reviewStars business\_id users\_id review\_images\_id

&nbsp;		   varchar(255)    5

&nbsp;	8. review\_images

&nbsp;		id imagePath userId

&nbsp;	9. roles

&nbsp;		id 	name

&nbsp;		1	admin

&nbsp;		2. 	businessowner

&nbsp;		3.	employee



Get the full details of business owner from city 'Neemuch'



select \* from business inner join cities inner join users inner join roles inner join business\_categories on business.bc\_id=business\_categories.id and business.cities\_id=cities.id and business.users\_id=users.id;





MariaDB \[justdial\_db]> select \* from business inner join cities inner join users inner join roles inner join business\_categories on business.bc\_id=business\_categories.id and business.cities\_id=cities.id and business.users\_id=users.id and users.roles\_id=roles.id where cities.name like '%Neemuch%';

+----+------------+-------+-----------+----------+----+---------+-----------+----+--------+-------+-------+----------+----+---------------+----+---------+

| id | bname      | bc\_id | cities\_id | users\_id | id | name    | states\_id | id | fname  | mname | lname | roles\_id | id | name          | id | bc\_name |

+----+------------+-------+-----------+----------+----+---------+-----------+----+--------+-------+-------+----------+----+---------------+----+---------+

| 19 | Raj Saloon |     6 |         1 |        5 |  1 | Neemuch |         1 |  5 | Manish | NULL  | Sen   |        2 |  2 | businessOwner |  6 | saloon  |

+----+------------+-------+-----------+----------+----+---------+-----------+----+--------+-------+-------+----------+----+---------------+----+---------+

1 row in set (0.000 sec)





MariaDB \[justdial\_db]>



MariaDB \[justdial\_db]> select business.bname,cities.name,roles.name,business\_categories.bc\_name from business inner join cities inner join users inner join roles inner join business\_categories on business.bc\_id=business\_categories.id and business.cities\_id=cities.id and business.users\_id=users.id and users.roles\_id=roles.id where cities.name like '%Neemuch%';

+------------+---------+---------------+---------+

| bname      | name    | role          | bc\_name |

+------------+---------+---------------+---------+

| Raj Saloon | Neemuch | businessOwner | saloon  |

+------------+---------+---------------+---------+

1 row in set (0.001 sec)



MariaDB \[justdial\_db]>









6\. users

&nbsp;		id 	name 	surname	roles\_id   email   		password

&nbsp;		1	Anil	Dollor	1          anil@gmail.com	123--->76d878sd

&nbsp;		2. 	Manish 	Sn











PlainPassword -------------> EncryptedPassword

123 	-------------------> 9asd9f7a9s7



MySQL Functions 



Encryption FUnction



One Way Hashing Algos



1\. SHA -> Secure Hash Algorithm 

2\. MD5 -> Message Digest 



123  -----SHA2--------> 

123  -----MD5-------->  32 Character





select sha2('123', 256)

a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3



select sha2('123', 512)

3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2



insert into users(fname,lname,email,password) values ('Anil','Dollor','anil@gmail.com','123');





select sha2('123', 512)





select MD5('123');



SQL Subqueries/Nested Query -> Count

1\. List users who have not written any review.

&nbsp;	select \* from users where  ( select count() from   )

&nbsp;  

roles

&nbsp;	id role\_name

&nbsp;	

users

&nbsp;	id name

&nbsp;	1  A    BO

&nbsp;	2. B    Customer

&nbsp;	3. C	 

&nbsp;	4. D

&nbsp;	

business

&nbsp;	id bname users\_id

&nbsp;	1.  B-A	 3	

&nbsp;	2.  B-B  4

&nbsp;	3.  B-C	 1



review

&nbsp;	id reviewContent  reviewStars business\_id users\_id review\_images\_id

&nbsp;	1	Good	   3              1         

&nbsp;	2

&nbsp;	3







SQL Subqueries/Nested Query -> Count





employees

&nbsp;	id  name salary

&nbsp;	1    A     1000

&nbsp;	2.   B      2000

&nbsp;	3    C      3000





Question

Get the salary of all employees whose salary is greater than empId=2



select \* from employees where salary >= ()









How to generate any tables programmatically in NodeJs/NextJs ?





Code -------> Run/Execute ----------------> tables



Shell-----> SQL Queries -> Execute ------> tables



justdial\_db

&nbsp;	1. business\_categories

&nbsp;		id  bcname  

&nbsp;	2. businesses

&nbsp;		id  	bname   	bc\_id 	cities\_id  users\_id

&nbsp;		o	Raj Saloon	1	1		2

&nbsp;	3. cities

&nbsp;		id name

&nbsp;	4. states

&nbsp;		id name cities\_id counties\_id

&nbsp;	5. countries

&nbsp;		id name

&nbsp;	6. users

&nbsp;		id 	name 	surname		roles\_id

&nbsp;		1	Anil	Dollor		1

&nbsp;		2. 	Manish 	Sn		2

&nbsp;	7. reviews 

&nbsp;		id reviewContent  reviewStars business\_id users\_id review\_images\_id

&nbsp;		   varchar(255)    5

&nbsp;	8. review\_images

&nbsp;		id imagePath userId

&nbsp;	9. roles

&nbsp;		id 	name

&nbsp;		1	admin

&nbsp;		2. 	businessowner

&nbsp;		3.	employee

&nbsp;	10. customers

&nbsp;		id	cust\_name



-------------------------------------------------------------------------------------

6\. users

&nbsp;		id 	name 	surname		roles\_id	email	password

&nbsp;		1	Anil	Dollor		1

&nbsp;		2. 	Manish 	Sn		2

Login System ---> Backend System







1\. Registration

&nbsp;	User System Registration

&nbsp;	1. First

&nbsp;	2. Last

&nbsp;	3. email

&nbsp;	4. password

&nbsp;	confirm password 



2\. Login

&nbsp;	User Login









https://www.prisma.io/



1\. NodeJs Library --> DB Operations





Prisma ORM

&nbsp;	Object Relational Manager





Types of Database

1.SQL Database

&nbsp;	Structured Query Language

&nbsp;	Eg

&nbsp;	MySQL/MariaDb,Postgres, SQL Server, MS Access, Oracle, Sybase, Informix, 





2\. NoSQL Database



&nbsp;	MongoDB



Prisma ORM  -----> Code -----> Run------> DB Operation   SQL/NoSQL





COde --->Write---> File ??? schema.prisma





npm init -y



This command will create a file of type JSON

i.e package.json



JSON ?

&nbsp;	JavaScript Object Notation





JavaScript Object Name,Surname ?



{

&nbsp;	Key:Value	

}

{

&nbsp;	"name":"Anil",

&nbsp;	"surname":"Dollor"	

}







File text type



anil.txt

file pdf type

anil.pdf







NodeJs





Prisma ORM is a 3rd party library



3rd party Vs Built-in





install -------> Internet Download------->**https://npmjs.com**





l

npx = Node Package Execute

