const expect = require('chai').expect,
      hasher = require('../lib/hasher')();


describe('hasher', () => {

  it('should hash using md5', () => {
    expect(hasher.hash('key')).to.be.equal('3c6e0b8a9c15224a8228b9a98ca1531d');
  });

});