import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return Ember.$.getJSON('http://www.mikesfishtank.com/api/retrieveTempData.php?interval=last');
	}
});