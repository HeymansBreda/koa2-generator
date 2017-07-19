const fn_index = async (ctx, next) => {
  ctx.body = `<h1>Hello, world</h1>`
};


module.exports = {
  'GET /': fn_index,
};