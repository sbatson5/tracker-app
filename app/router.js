import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', { path: '/games/:name' });
  this.route('movies', { path: '/movies/:name' });
});

export default Router;
