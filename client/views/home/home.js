Template.home.helpers({
  'messages' : function () {
    return [
      { 'message' : "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia. Fashion axe Banksy chia umami artisan, bitters 90's fanny pack. Single-origin coffee drinking vinegar blog semiotics. Fap mumblecore church-key PBR&B, direct trade 8-bit swag asymmetrical slow- carb Marfa ethical.",
        'author': {'name': 'John Doe', 'image': 'http://lorempixel.com/200/200'}
      },
      { 'message' : "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia.",
        'author': {'name': 'Jane Doe', 'image': 'http://lorempixel.com/200/200'}
      },
      { 'message' : "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia.",
        'author': {'name': 'Edward Doe', 'image': 'http://lorempixel.com/200/200'}
      },
      { 'message' : "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia.",
        'author': {'name': 'Michael Doe', 'image': 'http://lorempixel.com/200/200'}
      },
      { 'message' : "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia.",
        'author': {'name': 'Alex Doe', 'image': 'http://lorempixel.com/200/200'}
      }
    ];
  }
});

Template.home.events({
});


Template.home.rendered = function () {
  // @see: http://stackoverflow.com/questions/5284814/jquery-scroll-to-div
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

    return true;
  });
};
