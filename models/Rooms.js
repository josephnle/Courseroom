Rooms = new Mongo.Collection('rooms');

Rooms.attachSchema(
  new SimpleSchema({
    name: {
      type: String,
      label: 'Room Name',
      optional: true
    },
    description:
    {
      type: String,
      label: 'Room Description',
      optional: true
    },
    course: {
      type: String,
      label: 'Course',
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
