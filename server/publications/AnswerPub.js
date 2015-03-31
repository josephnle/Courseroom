Meteor.publish('Answer', function () {
  return Answer.find();
});