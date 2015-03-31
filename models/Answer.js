// { "answer" : "models/Answer.js" }
Answer = new Mongo.Collection('Answer');

Answer.attachSchema(
    new SimpleSchema({
    content: {
      type: String
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
  __modelName__.allow({
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
