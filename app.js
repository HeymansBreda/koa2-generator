/**
 * Created by wangchao on 2017/7/19.
 */
const Koa = require('koa');

const app = new Koa();

const temp = require('./templating');
const controller = require('./controller');

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  let staticFiles = require('./static-files');
  app.use(staticFiles('/static/', __dirname + '/static'));
}

app.use(async (ctx, next) => {
  let start = new Date();
  await next();
  let ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
});

app.use(temp('view', {
  noCache: !isProduction,
  watch: !isProduction
}));
// Router
app.use(controller());

app.listen(3000);
console.log('app started at port 3000......');