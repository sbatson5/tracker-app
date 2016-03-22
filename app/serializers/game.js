import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  normalizeResponse(store, primaryModelClass, payload) {
    payload.games = payload.results;
    delete payload.results;

    return this._super(...arguments);
  }
});
