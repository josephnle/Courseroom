// { "User" : "models/user.js" }
User = new Mongo.Collection('user.js');

User.attachSchema(
    new SimpleSchema({
    first_name: {
      type: String,
      label: "First Name"
    },
    last_name: {
      type: String,
      label: "Last Name"
    },
    email:{
      type: String,
      label: "Email Address"
    },
    loginAt: {
      type: Date,
      denyUpdate: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  User.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
