import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://api.themoviedb.org',
  namespace: '3/search',

  pathForType() {
    return 'movie';
  }
});
