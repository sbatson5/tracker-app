import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search(value) {
      console.log(value);
      this.transitionTo('games', value);
    }
  }
});
