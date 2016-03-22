import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  posterUrl: 'http://image.tmdb.org/t/p/original',
  defaultPosterUrl: 'http://filmfranchises.com/static/img/timthumb.php?src=/static/img/posters/r/ride_along_2.jpg'
});
