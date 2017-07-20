const fn_index = async (ctx, next) => {
  ctx.render('index.html', {
    title: 'Welcome'
  })
};

const fn_signin = async (ctx, next) => {
  var
    email = ctx.request.body.email || '',
    password = ctx.request.body.password || '';

  if (email == 'mail@email.com' && password === 'password') {
    // success
    ctx.render('signin-ok.html', {
      title: 'Sign In OK',
      name: 'Mr Node'
    })
  } else {
    // error
    ctx.render('signin-failed.html', {
      title: 'Sign In Failed'
    })
  }
};

module.exports = {
  'GET /': fn_index,
  'POST /signin': fn_signin
};