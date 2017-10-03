const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const app = new Koa();
const route = require('koa-route');
const bodyParser = require('koa-bodyparser');
const routes = require('./libs/routes');

app.use(bodyParser());


app.use(serve(path.join(__dirname)));
app.use(route.get('/', routes.main));
app.use(route.get('/api/todoitems', routes.list));
app.use(route.post('/api/todoitems', routes.add));
app.use(route.put('/api/todoitems/:id', routes.update));
app.use(route.del('/api/todoitems/:id', routes.del));


app.listen(3000);