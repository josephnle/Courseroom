Meteor.publish('question', function () {
  return Question.find();
});
