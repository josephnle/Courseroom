// { "answer" : "models/Answer.js" }
Answers = new Mongo.Collection('answers');

Answers.attachSchema(
  new SimpleSchema({
    content: {
      type: String
    },
    question: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },
    room: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },
    createdBy: {
      type: String,
      regEx: SimpleSchema.RegEx.Id,
      autoValue: function() {
        if (this.isInsert) return Meteor.userId
      },
      optional: true
    },
    postedAt: {
      type: Date,
      denyUpdate: true,
      autoValue: function() {
        if (this.isInsert) return new Date()
      },
      optional: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Answers.allow({
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
