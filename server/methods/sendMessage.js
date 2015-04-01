Meteor.methods({
  sendMessage: function(msg, room) {
    check(msg, String);
    check(room, String);

    var res = msg.split(":");
    if ("Q" == res[0]) {
      //trims off the Q:
      var quest = msg.substr(2);
      Questions.insert({content: quest, room: room});
    }
    else if ("A" == res[0]) {
      //trims off the A:
      var ans = msg.substr(2);
      Answers.insert({content: ans, room: room});
    }

    // store as message as well
    Messages.insert({message: msg, room: room});
  }
});
