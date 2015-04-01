function parse(thismessage)
{
	var res = thismessage.split(":");
	if("Q"==res[0])
	{
		//trims off the Q:
		var quest = thismessage.substr(2);
		Questions.insert({content:quest});
	}
	else if("A"==res[0])
	{
		//trims off the A:
		var ans = thismessage.substr(2);
		Answers.insert({content:ans});
	}
	else
	{
		//assign original to message
		Messages.insert({message:thismessage});
	}
}
Meteor.sendMessage(function(mess_age))
{
	parse(mess_age);
}
