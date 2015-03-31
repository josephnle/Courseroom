// { "Answer" : "models/answer.js"}

//grabs username attribute value from User schema
user = orion.attributes.registerAttribute('username', getSchema: function(username){
	return{
		type: String
	};
});

answerSchema = {};

answerSchema.Answer = new SimpleSchema({
	answerText: {
		type: String,
		regex: /^[a-zA-Z-]{2,25}$/
	},
	postedAt: {
		type: date
	}
	user: {
		type: [user]
	}
});

Meteor.answer.attachSchema(answerSchema.Answer);