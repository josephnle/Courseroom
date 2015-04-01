// models/message.js
Messages = new Mongo.Collection('messages');

Messages.attachSchema(new SimpleSchema({
    message: {
      type: String
    },
    room: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },
    postedAt: {
      type: Date,
      denyUpdate: true,
      autoValue: function() { if(this.isInsert) return new Date() },
      optional: true
    },
    createdBy: {
      type: String,
      regEx: SimpleSchema.RegEx.Id,
      autoValue: function() { if(this.isInsert) return this.userId },
      optional: true
    }
  })
);

if (Meteor.isServer) {
  Messages.allow({
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