Meteor.subscribe('courses');

Router.route('/admin', function () {
  this.render('admin');
});

Router.route('/admin/courses', function () {
  this.render('adminCourses');
});

Router.route('/admin/rooms', function () {
  this.render('adminRooms');
});
