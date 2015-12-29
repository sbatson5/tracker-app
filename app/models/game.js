import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  name: attr('string'),
  image: attr('object'),
  original_release_date: attr('string'),
  deck: attr('string')
});
