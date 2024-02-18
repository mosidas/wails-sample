package main

import (
	"fmt"
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
	ret := []Account{}
	for i := 0; i < 200; i++ {
		ret = append(ret, Account{
			ID:        i,
			Name:      fmt.Sprintf("Name %d", i),
			Password:  fmt.Sprintf("Password %d", i),
			Birthday:  time.Now(),
			EMail:     fmt.Sprintf("Email example@%d.com", i),
			Phone:     fmt.Sprintf("Phone %d", i),
			CreatedAt: time.Now(),
		})
	}
	return ret
}

func (a *Accountlogic) SaveAccount(account Account) {
	fmt.Println("SaveAccount")
	fmt.Println(account)
}
