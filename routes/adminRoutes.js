Meteor.subscribe('courses');

Router.route('/admin', function () {
  this.render('admin');
});

Router.route('/admin/courses', function () {
  this.render('adminCourses');
});
