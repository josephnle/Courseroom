Meteor.publish('message', function () {
  return Message.find();
});