/**
 * Created by wangchao on 2017/7/19.
 */
const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

const controller = require('./controller');


// Router
app.use(controller());

app.listen(3000);
console.log('app started at port 3000......');