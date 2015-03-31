Template['sidebar'].helpers({
  'rooms': function() {
    return [
      {
        '_id': '1',
        'name': 'Classroom'
      },
      {
        '_id': '2',
        'name': 'Labs'
      },
      {
        '_id': '3',
        'name': 'Homework'
      },
      {
        '_id': '4',
        'name': 'General'
      }
    ]
  },
  'groups': function() {
    return [
      {'name': 'Group 1'}
    ]
  }
});

Template['sidebar'].events({
});
