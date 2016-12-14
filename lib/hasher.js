const crypto = require('crypto');


module.exports = () => {
  return {
    hash: function(val){
      return crypto.createHash('md5').update(val).digest("hex");
    }
  };
};
