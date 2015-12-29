import movieDB from './movieDB';

export default movieDB.extend({
  pathForType() {
    return 'tv';
  }
});
