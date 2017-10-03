const mongoose = require('mongoose');

class MongoDB {
  constructor(host="localhost", dbName="test", collectionName="todolists") {
    mongoose.connect(`mongodb://${host}/${dbName}`);
    const TodoSchema = new mongoose.Schema({
      title: String,
      checked: Boolean,
      updated_at: { type: Date, default: Date.now },
    });
    this._TodoModel = mongoose.model(collectionName, TodoSchema);
  }

  getAll() {
    return this._TodoModel.find().then(data => data).catch( err => console.log(err));
  }

  add(title, checked=false) {
    return new this._TodoModel({
      title,
      checked,
    }).save().then(data => data).catch( err => console.log(err));
  }

  update(id, title, checked) {
    return this._TodoModel.findByIdAndUpdate(id, {
      title,
      checked,
    }).then(data => data).catch( err => console.log(err));
  }

  del(id) {
    return this._TodoModel.findByIdAndRemove(id).then(data => data).catch( err => console.log(err));
  }
}
module.exports = new MongoDB();