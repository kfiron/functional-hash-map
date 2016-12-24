
module.exports.newMap = initialObject => hashMap(initialObject);

function hashMap(initialObject) {

  const internalMap = constructInitialObject(initialObject);

  return {
    get: get,
    set: set,
    has: has,
    map: map,
    forEach: forEach,
    filter: filter,
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
    const obj = {};
    for(var key in internalMap){
      obj[key] = callBack(key,internalMap[key]);
    }
    return hashMap(obj);
  }

  function forEach(callback){
    for(var key in internalMap){
      callback(key, internalMap[key]);
    }
  }

  function filter(predicate){
    var obj = {};
    for(var key in internalMap){
      if(predicate(key, internalMap[key])){
        obj[key] = internalMap[key];
      }
    }
    console.log(obj);
    return hashMap(obj);
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