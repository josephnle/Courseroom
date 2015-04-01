Meteor.publish('messages', function (roomId) {
  return Messages.find({room: roomId});
});