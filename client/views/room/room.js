Template['room'].helpers({
  'author': function() {
    return Meteor.users.findOne(this.createdBy);
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
  }
});
