import DS from 'ember-data';
import Ember from 'ember';

const { set } = Ember;

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  normalizeResponse(store, primaryModelClass, payload) {
    payload.tv = payload.results;

    for (let prop in payload.tv) {
      const newProp = payload.results[prop].poster_path
        ? `http://image.tmdb.org/t/p/original${payload.results[prop].poster_path}`
        : `http://filmfranchises.com/static/img/timthumb.php?src=/static/img/posters/r/ride_along_2.jpg`;
      payload.tv[prop].image = newProp;
    }

    delete payload.results;
    return this._super(...arguments);
  }
});
