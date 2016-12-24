
module.exports.newMap = initialObject => hashMap(initialObject);

function hashMap(initialObject) {

  const internalMap = constructInitialObject(initialObject);

  return {
    get: get,
    set: set,
    has: has,
    map: map,
    size: size
  };

  function get(key) {
    return internalMap[key];
  }

  function set(key, val) {
    internalMap[key] = val;
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

  function constructInitialObject(initialObject){
    const internalMap = {};
    if(initialObject){
      for(var key in initialObject){
        internalMap[key] = initialObject[key];
      }
    }
    return internalMap;
  }
}