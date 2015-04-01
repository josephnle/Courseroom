// models/courses.js
Courses = new Mongo.Collection('courses');

Courses.attachSchema(new SimpleSchema({
    name: {
      type: String,
      label: 'Course Name'
    },
    objective: {
      type: String,
      label: 'Course Objective',
      optional: true
    },
    instructorName: {
      type: String,
      label: 'Instructor Name'
    },
    season: {
      type: String,
      label: 'Course Season',
      optional: true
    },
    createdBy: {
      type: String,
      regEx: SimpleSchema.RegEx.Id,
      autoValue: function() { if(this.isInsert) return this.userId },
      optional: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Courses.allow({
    insert: function() {
      return true;
    },
    update: function() {
      return true;
    },
    remove: function() {
      return true;
    }
  });
}