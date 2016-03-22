import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://www.giantbomb.com',
  namespace: 'api',

  ajaxOptions(url, type, options) {
    let hash = this._super(url, type, options);
    hash.dataType = "jsonp";
    hash.jsonp = 'json_callback';
    return hash;
  },

  pathForType() {
    return 'search';
  }
});
