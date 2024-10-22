package main

import (
	"database/sql"
	"fmt"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"time"
)

type Account struct {
	Id        int       `json:"id"`
	Name      string    `json:"name"`
	Password  string    `json:"password"`
	Birthday  time.Time `json:"birthday"`
	EMail     string    `json:"email"`
	Phone     string    `json:"phone"`
	CreatedAt time.Time `json:"createdAt"`
}

func NewAccount() *Account {
	return &Account{}
}

type AccountLogic struct {
}

func (a *AccountLogic) LoadAccounts() []Account {
	fmt.Println("LoadAccounts")
	db, err := sql.Open("sqlite3", "./myDb.db")
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
			Id:        id,
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

func (a *AccountLogic) SaveAccount(account Account) {
	fmt.Println("SaveAccount")
	fmt.Println(account)
}
