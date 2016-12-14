const hasher = require('./hasher')();

module.exports.newMap = () => map();

function map() {

  const elements = {};

  return {
    get: get,
    set: set,
    has: has,
    map: map
  };

  function get(key) {
    return elements[hasher.hash(key)];
  }

  function set(key, val) {
    elements[hasher.hash(key)] = val;
  }

  function has(key){
    return (get(key) != undefined);
  }

  function map(predicate){

  }
}