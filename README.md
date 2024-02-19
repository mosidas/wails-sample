# wails-sample

## About

- init
```bash
wails init -n wails-sample -t react-ts
```

- frontend
```bash
npm i @react-three/fiber @react-three/drei three
npm i @types/three
```
- backend
  - gcc(windows)
```bash
choco install -y mingw
```
  - sqlite3
```bash
go get github.com/mattn/go-sqlite3
go env -w CGO_ENABLED=1
go build
```


## frontend

```bash
node -v
v20.11.1
```
