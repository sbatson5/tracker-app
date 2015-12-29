import DS from 'ember-data';
import Ember from 'ember';

const { set } = Ember;

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.movies = payload.results;

    for (let prop in payload.movies) {
      const newProp = payload.results[prop].poster_path
        ? `http://image.tmdb.org/t/p/original${payload.results[prop].poster_path}`
        : `http://filmfranchises.com/static/img/timthumb.php?src=/static/img/posters/r/ride_along_2.jpg`;
      payload.movies[prop].image = newProp;
    }

    delete payload.results;
    return this._super(...arguments);
  }
});
