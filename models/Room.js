Rooms = new Mongo.Collection('rooms');

Rooms.attachSchema(
  new SimpleSchema({
    name: {
      type: String,
      regEx: /^[a-zA-Z-]{2,25}$/,
      optional: true
    },
    description:
    {
      type: String,
      optional: true
    },
    course: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Rooms.allow({
    insert: function() {
      return true;
    },
    update: function() {
      return true;
    },
    remove: function() {
      return true;
    }
  });
}
