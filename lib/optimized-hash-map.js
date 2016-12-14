const hasher = require('./hasher')();

module.exports.newMap = () => map();

function map() {

  const map = {};

  return {
    get: get,
    set: set,
    has: has
  };

  function get(key) {
    return map[hasher.hash(key)];
  }

  function set(key, val) {
    map[hasher.hash(key)] = val;
  }

  function has(key){
    return (get(key) != undefined);
  }
}