Router.route('/rooms/:_id', {
    'name': 'rooms',
    'action': function() {
      SEO.set({title: 'Room ' + this.params._id + ' | ' + Meteor.App.NAME});
      this.render('room', {
        waitOn: function() {
          return [Meteor.subscribe('messages', this.params._id),
                  Meteor.subscribe('questions', this.params._id)];
        },
        data: function() {
          return {
            messages: Messages.find({room: this.params._id}),
            questions: Questions.find({room: this.params._id})
          }
        }
      });
    }
  }
);
