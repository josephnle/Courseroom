// models/message.js
Messages = new Mongo.Collection('messages');

Messages.attachSchema(new SimpleSchema({
    message: {
      type: String,
      regEx: /^[a-zA-Z-]{2,25}$/
    },
    postedAt: {
      type: Date,
      denyUpdate: true,
      autoValue: function() { if(this.isInsert) return new Date() }
    },
    createdBy: {
      type: String,
      regEx: SimpleSchema.RegEx.Id,
      autoValue: function() { if(this.isInsert) return Meteor.userId }
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