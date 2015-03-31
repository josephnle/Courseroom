Meteor.publish('answer', function () {
  return Answer.find();
});