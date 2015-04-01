Meteor.publish('questions', function (roomId) {
  return Questions.find({room: roomId});
});
