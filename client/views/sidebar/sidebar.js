Meteor.subscribe('courses');
Meteor.subscribe('rooms');

Session.set('currentCourse', 'ysm6bQpf8c37rzA7u');

var courseChangeDep = new Deps.Dependency();

Template['sidebar'].helpers({


  'courses': function() {
    return Courses.find();
  },

  'rooms': function() {
    courseChangeDep.depend();
    return Rooms.find({course: Session.get('currentCourse')});
  },
  'groups': function() {
    return [
      {'name': 'Group 1'}
    ]
  }
});

Template['sidebar'].rendered = function(){
  this.$('.ui.dropdown').dropdown();
};

Template['sidebar'].events({
  'click .selectCourse': function(event) {
    var course = $(event.target).data('id');

    Session.set('currentCourse', course);

    courseChangeDep.changed();

    return false;
  }
});
