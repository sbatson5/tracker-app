import MovieDB from './movie-db';
import Ember from 'ember';

const { get } = Ember;

export default MovieDB.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    payload.tv = payload.results;

    for (let prop in payload.tv) {
      if (payload.results[prop].poster_path) {
        payload.tv[prop].image = `${get(this, 'posterUrl')}${payload.results[prop].poster_path}`;
      } else {
        payload.tv[prop].image = get(this, 'defaultPosterUrl');
      }
    }

    delete payload.results;
    return this._super(...arguments);
  }
});
