const expect = require('chai').expect,
  factory = require('..');

describe('optimized hash map', () => {

  beforeEach(function () {
    this.map = factory.newMap();
  });

  const key = 'key';
  const stringValue = 'value';
  const anotherKey = 'anotherKey';
  const anotherValue = 'anotherValue';
  const anotherDifferentKey = 'anotherDifferentKey';
  const anotherDifferentValue = 'anotherDifferentValue';


  describe('get and set by key', function () {
    it('should return null for non exist entry', function () {
      expect(this.map.get(key)).to.be.undefined;
    });
    it('should insert and get the key which is a string', function () {
      this.map.set(key, stringValue);
      expect(this.map.get(key)).to.be.equal(stringValue);
    });
  });

  describe('construct map from exiting object', function(){
    const object = { someKey: 'someValue'};
    const newMap = factory.newMap(object);
    expect(newMap.get('someKey')).to.be.equal('someValue');
  });


  describe('has()', function () {
    it('should return false for check existence using has ', function () {
      expect(this.map.has(key)).to.be.false;
    });

    it('should return true for check existence using has ', function () {
      this.map.set('key', 'value');
      expect(this.map.has(key)).to.be.true;
    });
  });

  describe('size()', function () {
    it('empty and size shpuld be zero', function(){
      expect(this.map.size()).to.be.equal(0);
    });
    it('add element and return the correct size', function(){
      this.map.set('key', 'value');
      expect(this.map.size()).to.be.equal(1);
    });
  });

  describe('map()', function(){
    it('map on empty map should return empty object', function(){
      const newMap = this.map.map((k, v) => 'v');
      expect(newMap.size()).to.be.equal(0);
    });
    it('map on map with elements should return new value', function(){
      this.map.set(key, stringValue);
      const otherStringValue = 'some-other-string-value';
      const newMap = this.map.map((k, v) => otherStringValue);
      expect(newMap.get(key)).to.be.equal(otherStringValue);
    });
  });

  describe('forEach()', function(){
    it('foreach items', function(){
      const object = {};
      this.map.set(key, stringValue);
      this.map.forEach((k, v) => {
        object[k] = v;
      });
      expect(object[key]).to.be.equal(stringValue);
    });
  });

  describe('filter() / filterNot()', function(){

    it('filter for match predicate should return another map', function(){
      this.map.set(key, stringValue);
      this.map.set(anotherKey, anotherValue);
      const newMap = this.map.filter((k,v) => {
        return (k == key) && (v == stringValue);
      });
      expect(newMap.size()).to.be.equal(1);
      expect(newMap.get(key)).to.be.equal(stringValue);
    });

    it('filterNot for match predicate should return another map', function(){
      this.map.set(key, stringValue);
      this.map.set(anotherKey, anotherValue);
      const newMap = this.map.filterNot((k,v) => {
        return (k == key) && (v == stringValue);
      });
      expect(newMap.size()).to.be.equal(1);
      expect(newMap.get(anotherKey)).to.be.equal(anotherValue);
    });
  });

  describe('slice()', function(){
    it('slice map', function(){
      this.map.set(key, stringValue);
      this.map.set(anotherKey, anotherValue);
      const newMap =  this.map.slice(1,2);
      expect(newMap.size()).to.be.equal(1);
      expect(newMap.get(anotherKey)).to.be.equal(anotherValue);
    });
  });

  describe('head(), last(), tail(), init()', function(){
    function initMap(map){
      map.set(key, stringValue);
      map.set(anotherKey, anotherValue);
      map.set(anotherDifferentKey, anotherDifferentValue);
    }

    it('head should return the hashmap with only the first element', function(){
      initMap(this.map);
      const newMap = this.map.head();
      expect(newMap.get(key)).to.be.equal(stringValue);
      expect(newMap.size()).to.be.equal(1);
    });

    it('last should return hashmap with only the last element', function(){
      initMap(this.map);
      const newMap = this.map.last();
      expect(newMap.get(anotherDifferentKey)).to.be.equal(anotherDifferentValue);
      expect(newMap.size()).to.be.equal(1);
    })

  });



});
