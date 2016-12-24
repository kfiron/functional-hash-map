
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
    filterNot: filterNot,
    slice: slice,
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
    return pFilter(predicate, true);
  }

  function filterNot(predicate){
    return pFilter(predicate, false);
  }

  function slice(fromIndex, toIndex){
    var sliced = {};
    var i = 0;
    for (var k in internalMap) {
      if (i >= fromIndex && i < toIndex)
        sliced[k] = internalMap[k];
      i++;
    }
    return hashMap(sliced);
  }

  function size(){
    return Object.keys(internalMap).length;
  }

  function pFilter(predicate, isFilter){
    const obj = {};
    for(var key in internalMap){
      const predicateResult = predicate(key, internalMap[key]);
      if((predicateResult && isFilter) || (!predicateResult && !isFilter)){
        obj[key] = internalMap[key];
      }
    }
    return hashMap(obj);
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