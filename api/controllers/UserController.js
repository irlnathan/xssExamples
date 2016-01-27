/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  createUser: function(req, res) {

    // if no user exists create one, if not leave it as is, but send message 
    // either way.
    User.count().exec(function(err, count){
      if (err) return res.negotiate(err);

      if (count < 1) {
        User.create({
          name: 'Hacker!',
          description: "<script>alert('a')</script>"
        }).exec(function(err, createdUser){
          if (err) return negotiate(err);

          return res.send({
            message: 'user created!'
          });
        });
      } else {
        
        return res.send({
          message: 'user already exists!'
        });
      }
    });
  },

  showProfile: function(req, res){
    User.findOne({
      name: 'Hacker!'
    }).exec(function(err, foundUser){
      if (err) return res.negotiate(err);

      if (!foundUser) {
        return res.view('profile', {
          name: null
        });
      };

      return res.view('profile', {
        name: foundUser.name,
        description: foundUser.description
      });
    });
  },

  deleteUser: function(req, res){
    User.findOne({
      name: 'Hacker!'
    }).exec(function(err, foundUser){
      if (err) return res.negotiate(err);

      if (!foundUser) {
        return res.json({
          message: 'no users!'
        })
      };

      User.destroy(foundUser.id).exec(function(err, deletedUser){
        if (err) return res.negotiate(err);

        return res.json({
          message: 'user deleted!'
        });
      });
    });
  }
};

