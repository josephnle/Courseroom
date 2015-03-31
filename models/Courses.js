// models/courses.js
Courses = new Mongo.Collection('courses');

Courses.attachSchema(new SimpleSchema({
    name: {
      type: String,
      regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    objective: {
      type: String,
      regEx: /^[a-z0-9A-Z_]{3,15}$/,
      optional: true
    },
    instructorName: {
      type: String,
      regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    semester: {
      type: String,
      regEx: /^[a-zA-Z-]{2,25}$/,
      optional: true
    },
    createdBy: {
      type: String,
      regEx: SimpleSchema.RegEx.Id,
      autoValue: function() { if(this.isInsert) return Meteor.userId }
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