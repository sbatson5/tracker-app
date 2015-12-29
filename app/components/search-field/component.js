import Ember from 'ember';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  classNames: ['search-field'],
  searchValue: null,

  actions: {
    search(value) {
      this.attrs.search(value);
    }
  }
});
