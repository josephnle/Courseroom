Template['navbar'].helpers({
});

Template['navbar'].events({
	'click #logout': function(){
		Meteor.logout();
	}
});


