Meteor.methods({
  sendMessage: function(msg) {
    check(msg, String);

    var res = msg.split(":");
    if ("Q" == res[0]) {
      //trims off the Q:
      var quest = msg.substr(2);
      Questions.insert({content: quest});
    }
    else if ("A" == res[0]) {
      //trims off the A:
      var ans = msg.substr(2);
      Answers.insert({content: ans});
    }

    // store as messge as well
    Messages.insert({message: msg});
  }
});
