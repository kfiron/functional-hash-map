const expect = require('chai').expect,
  factory = require('..');

describe('optimized hash map', () => {

  beforeEach(function () {
    this.map = factory.newMap();
  });

  const stringKey = 'key';
  const intKey = 0;
  const value = 'value';

  it('should return null for non exist entry', function() {
    expect(this.map.get(stringKey)).to.be.undefined;
  });

  it('should insert and get the key which is a string', function() {
    this.map.set(stringKey, value);
    expect(this.map.get(stringKey)).to.be.equal(value);
  });

  it('should return false for check existence using has ', function() {
    expect(this.map.has(stringKey)).to.be.false;
  });

  it('should return true for check existence using has ', function() {
    this.map.set(stringKey, value);
    expect(this.map.has(stringKey)).to.be.true;
  });
  it('should map to different types by providing predicate', function(){
    this.map.set(stringKey, value);
    this.map.map(val => val + 'extend');
    expect(this.map.get(stringKey)).to.be.equal(value + 'extend');
  });



});
