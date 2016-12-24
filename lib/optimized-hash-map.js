const hasher = require('./hasher')();

module.exports.newMap = () => hashMap();

function hashMap() {

  const internalMap = {};

  return {
    get: get,
    set: set,
    has: has,
    map: map,
    size: size
  };

  function get(key) {
    return internalMap[hasher.hash(key)];
  }

  function set(key, val) {
    internalMap[hasher.hash(key)] = val;
  }

  function has(key){
    return (get(key) != undefined);
  }

  function map(callBack) {
    return hashMap();
  }

  function size(){
    return Object.keys(internalMap).length;
  }
}