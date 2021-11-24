#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: users
#------------------------------------------------------------

CREATE TABLE users(
        id         Varchar (50) NOT NULL ,
        first_name Varchar (50) NOT NULL ,
        last_name  Varchar (50) NOT NULL ,
        email      Varchar (50) ,
        password   Varchar (80)
	,CONSTRAINT users_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: books
#------------------------------------------------------------

CREATE TABLE books(
        id       Varchar (50) NOT NULL ,
        title    Varchar (100) ,
        quantity Int
	,CONSTRAINT books_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: have
#------------------------------------------------------------

CREATE TABLE have(
        id       Varchar (50) NOT NULL ,
        id_users Varchar (50) NOT NULL
	,CONSTRAINT have_PK PRIMARY KEY (id,id_users)

	,CONSTRAINT have_books_FK FOREIGN KEY (id) REFERENCES books(id)
	,CONSTRAINT have_users0_FK FOREIGN KEY (id_users) REFERENCES users(id)
)ENGINE=InnoDB;

