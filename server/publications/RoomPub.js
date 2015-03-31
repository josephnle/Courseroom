Meteor.publish('room', function () {
  return Room.find();
});