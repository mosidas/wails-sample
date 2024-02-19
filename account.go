package main

import (
	"database/sql"
	"fmt"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"time"
)

type Account struct {
	ID        int
	Name      string
	Password  string
	Birthday  time.Time
	EMail     string
	Phone     string
	CreatedAt time.Time
}

func NewAccount() *Account {
	return &Account{}
}

type Accountlogic struct {
}

func (a *Accountlogic) LoadAcconts() []Account {
	fmt.Println("LoadAcconts")
	db, err := sql.Open("sqlite3", "./mydb.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM account")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	ret := []Account{}
	for rows.Next() {
		var id int
		var name string
		var password string
		var birthday string
		var email string
		var phone string
		var createdAt string
		err = rows.Scan(&id, &name, &password, &birthday, &email, &phone, &createdAt)
		if err != nil {
			log.Fatal(err)
		}
		b, e := time.Parse("2006-01-02", birthday)
		if e != nil {
			log.Println(e)
		}
		c, _ := time.Parse("2006-01-02T15:04:05", createdAt)
		account := Account{
			ID:        id,
			Name:      name,
			Password:  password,
			Birthday:  b,
			EMail:     email,
			Phone:     phone,
			CreatedAt: c,
		}
		ret = append(ret, account)
	}
	log.Println(ret)
	return ret
}

func (a *Accountlogic) SaveAccount(account Account) {
	fmt.Println("SaveAccount")
	fmt.Println(account)
}
