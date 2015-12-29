import DS from 'ember-data';
import Ember from 'ember';

const { set } = Ember;

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.movies = payload.results;

    for (let prop in payload.movies) {
      const newProp = `http://image.tmdb.org/t/p/original${payload.results[prop].poster_path}`;
      payload.movies[prop].image = newProp;
    }

    delete payload.results;
    return this._super(...arguments);
  }
});
