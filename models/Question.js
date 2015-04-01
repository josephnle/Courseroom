Questions = new Mongo.Collection('questions');

Questions.attachSchema(
  new SimpleSchema({
    content: {
      type: String
    },
    tag: {
      type: [String],
      optional: true
    },
    room: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },
    createdBy: {
      type: String,
      regEx: SimpleSchema.RegEx.Id,
      autoValue: function() { if(this.isInsert) return this.userId },
      optional: true
    },
    postedAt: {
      type: Date,
      denyUpdate: true,
      autoValue: function() { if(this.isInsert) return new Date() },
      optional: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Questions.allow({
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
