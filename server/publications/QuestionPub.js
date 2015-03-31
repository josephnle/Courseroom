Meteor.publish('Question', function () {
  return Question.find();
});
