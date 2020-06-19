//alert("Hello");

var SplitFactory = require('@splitsoftware/splitio').SplitFactory;
// Instantiate the SDK
var factory = SplitFactory({
    core: {
        authorizationKey: 'a3bnr8kp4b9n2clrnprh26nidgltsgolsim6',
        // the key can be the logged in
        // user id, or the account id that
        // the logged in user belongs to.
        // The type of customer (user, account, custom)
        // is chosen during Split's sign-up process.
        key: 'user_id'
    },
    startup: {
        readyTimeout: 1.5 // 1.5 sec
    }
});
// And get the client instance you'll use
var client = factory.client();