import MovieDB from './movie-db';
import Ember from 'ember';

const { get } = Ember;

export default MovieDB.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    payload.movies = payload.results;

    for (let prop in payload.movies) {
      if (payload.results[prop].poster_path) {
        payload.movies[prop].image = `${get(this, 'posterUrl')}${payload.results[prop].poster_path}`;
      } else {
        payload.movies[prop].image = get(this, 'defaultPosterUrl');
      }
    }

    delete payload.results;
    return this._super(...arguments);
  }
});
