App = Ember.Application.create();


// Define all of the URLs for the application
App.Router.map(function() {
	this.resource('about');
	this.resource('posts');
	this.resource('post', { path: ':post_id' });
});

App.PostsRoute = Ember.Route.extend({
	model: function() {
		return posts;
	}
});

var posts = [{
	id: '1',
	title: 'Rails is omakase',
	author: { name: 'd2h' },
	date: new Date('12-27-2012'),
	excerpt: 'This is an excerpt of D2H\'s "Rails is omakase" post',
	body: 'Rails is omakase. *For reals.*'
}, {
	id: '2',
	title: 'The Parley Letter',
	author: { name: 'd2h' },
	date: new Date('12-24-2012'),
	excerpt: 'This is an excerpt of D2H\'s "The Parley Letter" post',
	body: 'Totally a real post. Nothing fake here.'
}]