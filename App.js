const fs = require('fs');
const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const app = new Koa();
const route = require('koa-route');


const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./public/index.html');
};
app.use(serve(path.join(__dirname)));
app.use(route.get('/', main));
app.listen(3000);