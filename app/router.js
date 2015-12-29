import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', { path: '/games/:name' });
  this.route('movies', { path: '/movies/:name' });
  this.route('tv', { path: '/tv/:name' });
});

export default Router;
