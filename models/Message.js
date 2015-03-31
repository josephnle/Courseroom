// models/message.js
messageSchema = {}

messageSchema.Message= new SimpleSchema({
  Message: {
    type: String,
    regEx: /^[a-zA-Z-]{2,25}$/
  },
   postedAt: {
    type: Date

  },
  user:
    {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    }
  }

});
Meteor.message.attachSchema(messageSchema.Message);