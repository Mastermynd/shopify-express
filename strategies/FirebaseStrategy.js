const Firebase = require("firebase-admin");

module.exports = class FirebaseStrategy {
  constructor(firebaseConfig) {
    this.client = firebaseConfig;
  }

  storeShop({ shop, accessToken, data = {} }, done) {
    const shopData = Object.assign({}, { accessToken }, data);
    
    var newData = {
        shop: shop,
        accessToken : shopData
    }
    done(null, newData);
    
  }

  getShop({ shop }, done) {
    console.log('his.store[shop]');
    console.log(this.store[shop]);
    return done(null, this.store[shop]);
  }
};
