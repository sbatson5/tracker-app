import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchGames(value) {
      this.transitionTo('games', value);
    },
    searchMovies(value) {
      this.transitionTo('movies', value);
    }
  }
});
