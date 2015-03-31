AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');
AccountsTemplates.addFields([
  {
      _id: 'username',
      type: 'text',
      displayName: 'username',
      required: true,
      minLength: 5,
  },

  {
  	_id: 'firstName',
  	type: 'text',
  	displayName: 'First name',
  	required: true,
  },

  {
  	_id: 'lastName',
  	type: 'text',
  	displayName: 'Last name',
  	required: true,
  },

  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },

  {
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 6,
}
]);