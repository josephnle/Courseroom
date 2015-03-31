// models/courses.js

courseSchema = {};

courseSchema.Course = new SimpleSchema({
  coursename: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },
  objective: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/,
    optional: true,
  },
  instructor_name:{
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  }
  semester: 
  {
    type: String,
    regEx: /^[a-zA-Z-]{2,25}$/,
    optional: true
  }

  });

Meteor.course.attachSchema(courseSchema.Course);