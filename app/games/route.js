import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  model(params) {
    return this.store.query('game', {
      api_key: 'e77114ca77500b0eae41a653eacbcb7192ef6f96',
      format: 'jsonp',
      query: params.name,
      resources: 'game'
    });
  },

  setupController(controller, model) {
    set(controller, 'gameList', model.sortBy('name'));
  }
});
