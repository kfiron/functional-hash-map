const expect = require('chai').expect,
  factory = require('..');

describe('optimized hash map', () => {

  beforeEach(function () {
    this.map = factory.newMap();
  });

  const key = 'key';
  const stringValue = 'value';

  it('should return null for non exist entry', function() {
    expect(this.map.get(key)).to.be.undefined;
  });

  it('should insert and get the key which is a string', function() {
    this.map.set(key, 'value');
    expect(this.map.get(key)).to.be.equal(stringValue);
  });


  it('should return false for check existence using has ', function() {
    expect(this.map.has(key)).to.be.false;
  });

  it('should return true for check existence using has ', function() {
    this.map.set('key', 'value');
    expect(this.map.has(key)).to.be.true;
  });



});
