import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.games = payload.results;

    return this._super(...arguments);
  }
});
