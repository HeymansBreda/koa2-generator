const model = require('../../model');

let User = model.User;

(async () => {
  var user = await User.create({
    userid: parseInt(Math.random() * 10000),
    username: 'Join',
    password: '1231231231231231231231321'
  });

  console.log(`created: ${JSON.stringify(user)}`)
})();
