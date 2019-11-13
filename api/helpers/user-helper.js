const db = require("../config/dbConfig");

module.exports = {
  findById,
  add,
  update,
  remove
};

function findById() {
  return db("users")
    .where({ user_id })
    .first();
}

function add(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(user_id, changes) {
  return db("users")
    .where({ user_id })
    .update(changes);
}

function remove(user_id) {
  return db("users")
    .where("user_id", user_id)
    .del();
}
