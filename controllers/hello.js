var fn_hello = async (ctx, next) => {
  console.log(`hello`);
  ctx.body = `<h1>Hello, world</h1>`
};

module.exports = {
  'GET /hello': fn_hello,
};