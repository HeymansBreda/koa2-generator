module.exports = async function (ctx, next) {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
  next();
}