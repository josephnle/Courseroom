
course = orion.attributes.registerAttribute('course', getSchema: function(coursename){
  return{
    type: String
  };
});

roomSchema = {};
roomSchema.RoomProfile = new SimpleSchema({
  name: {
    type: String,
    regEx: /^[a-zA-Z-]{2,25}$/,
    optional: true
  }
  description: 
  {
    type:String,
    optional: true
  }
  course:{
    type: [course]
  }

});

roomSchema.Room = new SimpleSchema({
  profile:{
    type:roomSchema.RoomProfile
  }
  user: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  roles: {
    type: Object,
    optional: true,
    blackbox: true
  }
  
});
Meteor.room.attachSchema(roomSchema.Room);
