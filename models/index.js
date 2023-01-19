const User = require('./User');
const Category = require('./Category')
const Posts = require('./Posts');


// ASSOCIATIONS HERE

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Post, {
  foreignKey: 'user_id'
});

Comment.belongsToMany(User, {
  through: {
      model: Post,
  }
})


module.exports = {
  User,
  Category,
  Posts
};
