Router.route('/rooms/:_id', function () {
  this.render('room', {
    data: function() {
      //return Events.findOne(new Meteor.Collection.ObjectID(this.params._id));
      return {
        'messages': [
          {
            'message': "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia. Fashion axe Banksy chia umami artisan, bitters 90's fanny pack. Single-origin coffee drinking vinegar blog semiotics. Fap mumblecore church-key PBR&B, direct trade 8-bit swag asymmetrical slow- carb Marfa ethical.",
            'author': {'name': 'John Doe', 'image': 'http://lorempixel.com/200/200'}
          },
          {
            'message': "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia.",
            'author': {'name': 'Jane Doe', 'image': 'http://lorempixel.com/200/200'}
          },
          {
            'message': "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia.",
            'author': {'name': 'Edward Doe', 'image': 'http://lorempixel.com/200/200'}
          },
          {
            'message': "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia.",
            'author': {'name': 'Michael Doe', 'image': 'http://lorempixel.com/200/200'}
          },
          {
            'message': "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia.",
            'author': {'name': 'Alex Doe', 'image': 'http://lorempixel.com/200/200'}
          }
        ]
      };
    }
  });
  SEO.set({ title: 'Room | ' + Meteor.App.NAME });
});
