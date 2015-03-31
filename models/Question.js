// { "Question" : "models/question.js"}

//grabs username attribute value from User schema
user = orion.attributes.registerAttribute('username', getSchema: function(username){
	return{
		type: String
	};
});

questionSchema = {};

questionSchema.Question = new SimpleSchema({
	questionTitle: {
		type: String,
		regEx: /^[a-zA-Z-]{2,25}$/
	},
	questionText: {
		type: String,
		regEx: /^[a-zA-Z-]{2,25}$/
	},
	questionTag: { 
		type: [String],
		regEx: /^[a-zA-Z-]{2,25}$/
	},
	postedAt: {
		type: date
	}
	user: {
		type: [user]
	}	
});

Meteor.question.attachSchema(questionSchema.Question);