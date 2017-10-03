const mongoDB = require('./mongodb');
const fs = require('fs');

module.exports.main = (ctx) => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./public/index.html');
};

module.exports.list = (ctx) => {
  return mongoDB.getAll().then(data => {
    return ctx.response.body = data;
  })
}

module.exports.add = (ctx) => {
  const reqBody = ctx.request.body;
  return mongoDB.add(reqBody.title, reqBody.checked).then(data => {
    return ctx.response.body = data;
  })
}

module.exports.update = (ctx, id) => {
  const reqBody = ctx.request.body;
  return mongoDB.update(id, reqBody.title, reqBody.checked).then(data => {
    return ctx.response.body = data;
  })
}

module.exports.del = (ctx, id) => {
  return mongoDB.del(id).then(data => {
    return ctx.response.body = data;
  })
}