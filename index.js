var user = Math.floor((Math.random() * 100) + 1);

var factory = splitio({
    core: {
        authorizationKey: 'a3bnr8kp4b9n2clrnprh26nidgltsgolsim6',
        key: user // unique identifier for your user
    }
});
//alert("initalize split");

var client = factory.client();

client.on(client.Event.SDK_READY, function() {
    var treatment = client.getTreatment('Intern_test_split');
   // alert("recieved sdk ready");
    alert(user);
    if (treatment === 'on') {
        alert("Hello World Savni");
    }   else   if (treatment === 'off') {
        alert("Hello World Intern");
    }   else {
        alert("Hello World");
    }

});