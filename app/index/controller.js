import Ember from 'ember';

const {
  Controller,
  computed,
  computed: { equal },
  get,
  on,
  set
} = Ember;

export default Controller.extend({
  currentTab: null,
  setup: on('init', function() {
    set(this, 'currentTab', 'games');
  }),

  isGames: equal('currentTab', 'games'),
  isMovies: equal('currentTab', 'movies'),
  isTV: equal('currentTab', 'tv'),

  actions: {
    searchGames(value) {
      this.transitionTo('games', value);
    },
    searchMovies(value) {
      this.transitionTo('movies', value);
    },
    searchTV(value) {
      this.transitionTo('tv', value);
    },
    toggleSearch(value) {
      set(this, 'currentTab', value);
    }
  }
});
