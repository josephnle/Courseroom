Meteor.subscribe('answers');

Template['room'].helpers({
  'author': function() {
    return Meteor.users.findOne(this.createdBy);
  },
  'answer': function() {
    return Answers.findOne({question: this._id});
  }
});

Template['room'].events({
  'keypress #sendMessageForm #messageText': function (event) {
    if (event.which !== 13)
      return true;

    var text = event.target.value;

    Meteor.call('sendMessage', text, Router.current().params._id);

    // Clear form
    event.target.value = '';

    // Prevent default form submit
    return false;
  },
  'submit .answerQuestionForm': function(event) {
    var course = $(event.target).data('id');
    var answer = event.target.answerQuestionText.value;

    Answers.insert({content: answer, question: course, room: Router.current().params._id});

    return false;
  }
});
