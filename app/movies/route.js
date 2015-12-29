import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  model(params) {
    return this.store.query('movie', {
      api_key: 'd446fb55394114a7a43fa328f1ea8736',
      query: params.name
    });
  },

  setupController(controller, model) {
    set(controller, 'movieList', model.sortBy('title'));
  }
});
