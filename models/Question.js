Question = new Mongo.Collection('question');

Question.attachSchema(
  new SimpleSchema({
    title: {
      type: String
    },
    content: {
      type: String
    },
    tag: {
      type: [String]
    },
    createdBy: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },
    postedAt: {
      type: Date,
      denyUpdate: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Question.allow({
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
