App = Ember.Application.create();


// Define all of the URLs for the application
App.Router.map(function() {
	this.resource('about');
	this.resource('posts', function() {
		this.resource('post', { path: ':post_id' });
	});
});

App.PostsRoute = Ember.Route.extend({
	model: function() {
		return posts;
	}
});

App.PostRoute = Ember.Route.extend({
	model: function(params) {
		return posts.findBy('id', params.post_id);
	}
});

App.PostController = Ember.ObjectController.extend({
	isEditing: false,
	
	actions: {
		edit: function() {
			this.set('isEditing', true);
		},

		doneEditing: function() {
			this.set('isEditing', false);
		}
	}
});

// Handlebars helper
Ember.Handlebars.helper('format-date', function(date) {
	return moment(date).fromNow();
});

var showdown = new Showdown.converter();
Ember.Handlebars.helper('format-markdown', function(input) {
	return new Handlebars.SafeString(showdown.makeHtml(input));
});


// Demo data
var posts = [{
	id: '1',
	title: 'Rails is omakase',
	author: { name: 'd2h' },
	date: new Date('12/27/2012'),
	excerpt: 'This is an excerpt of D2H\'s "Rails is omakase" post',
	body: 'Rails is omakase. *For reals.*'
}, {
	id: '2',
	title: 'The Parley Letter',
	author: { name: 'd2h' },
	date: new Date('12/24/2012'),
	excerpt: 'This is an excerpt of D2H\'s "The Parley Letter" post',
	body: 'Totally a real post. Nothing fake here.'
}]