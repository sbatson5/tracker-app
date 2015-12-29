import _lang from 'lodash/lang';
import Ember from 'ember';
import DS from 'ember-data';

const { typeOf } = Ember;
const { Transform } = DS;
const { isObject } = _lang;

export default Transform.extend({
  deserialize(serialized) {
    return this._transformer(serialized);
  },

  serialize(deserialized) {
    return this._transformer(deserialized);
  },

  _transformer(value) {
    if (typeOf(value) === 'string') {
      return JSON.parse(value);
    } else if (!isObject(value)) {
      return {};
    } else {
      return value;
    }
  }
});
