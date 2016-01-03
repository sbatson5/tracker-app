import Ember from 'ember';

const {
  Controller,
  computed: { equal },
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
      this.transitionToRoute('games', value);
    },
    searchMovies(value) {
      this.transitionToRoute('movies', value);
    },
    searchTV(value) {
      this.transitionToRoute('tv', value);
    },
    toggleSearch(value) {
      set(this, 'currentTab', value);
    }
  }
});
