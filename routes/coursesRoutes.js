Meteor.subscribe('messages');
Meteor.subscribe('courses');

Router.route('/courses', {
    'name': 'courses',
    'action': function() {
      SEO.set({title: 'Courses | ' + Meteor.App.NAME});
      this.render('courses', {
        waitOn: function() {
          return [Meteor.subscribe('courses')];
        },
        data: function() {
          return {
            courses: Courses.find()
          }
        }
      });
    }
  }
);

Router.route('/courses/:_id', {
    'name': 'course',
    'action': function() {
      this.render('course', {
        waitOn: function() {
          return Meteor.subscribe('courses');
        },
        data: function() {
          return {
            course: Courses.findOne(this.params._id),
            rooms: Rooms.find({course: this.params._id})
          }
        }
      });
    }
  }
);

Router.route('/rooms/:_id', {
    'name': 'room',
    'action': function() {
      var room = Rooms.findOne(this.params._id);
      SEO.set({title: 'Room ' + room.name + ' | ' + Meteor.App.NAME});
      this.render('room', {
        waitOn: function() {
          return [Meteor.subscribe('messages'),
                  Meteor.subscribe('questions')];
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
