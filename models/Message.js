// models/message.js
messageSchema = {}
user = orion.attributes.registerAttribute('username', getSchema: function(username){
  return{
    type: String
  };
});
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
      type: [user]
    }
  }

});
Meteor.message.attachSchema(messageSchema.Message);