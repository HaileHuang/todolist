# MongoDB + koa + dva TodoList example

The data which Koa server fetch from mongoDB abstract as RESTful API

Then the dva fornted fetch data from API and render the browser pages

## Installation

### install mongoDB & run 

```brew update
brew update
brew install mongodb
mkdir -p /data/db
mongod
```

### clone project & run

```
git clone git@github.com:HaileHuang/todolist.git

npm install

npm start
```

### open in browser

open http://127.0.0.1:3000/
then you'll see
![](https://user-images.githubusercontent.com/10556018/31421686-592e3c8c-ae0e-11e7-80a4-fe934f7c2f74.png)