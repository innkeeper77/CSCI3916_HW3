var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB, { useNewUrlParser: true } );
mongoose.set('useCreateIndex', true);
// NOTE: BELOW IS INCOMPLETE AND COPIED FROM User.js !!
// user schema
var MovieSchema = new Schema({

});

UserSchema.pre('save', function(next) {
        next(); // Not sure exactly what this is, but it seems to be all that is needed from the Users.js template
});

// return the model
module.exports = mongoose.model('Movie', UserSchema);