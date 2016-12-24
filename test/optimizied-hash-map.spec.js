const expect = require('chai').expect,
  factory = require('..');

describe('optimized hash map', () => {

  beforeEach(function () {
    this.map = factory.newMap();
  });

  const key = 'key';
  const stringValue = 'value';


  describe('get and set by key', function () {
    it('should return null for non exist entry', function () {
      expect(this.map.get(key)).to.be.undefined;
    });
    it('should insert and get the key which is a string', function () {
      this.map.set(key, 'value');
      expect(this.map.get(key)).to.be.equal(stringValue);
    });
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

  describe('map()', function(){
    it('map on empty map should return empty object', function(){
      const newMap = this.map.map((k, v) => 'v');
      expect(newMap.size()).to.be.equal(0);
    });
  });


});
