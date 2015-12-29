import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  model(params) {
    return this.store.query('tv', {
      api_key: 'd446fb55394114a7a43fa328f1ea8736',
      query: params.name
    });
  },

  setupController(controller, model) {
    console.log(model);
    set(controller, 'tvList', model.sortBy('name'));
  }
});
