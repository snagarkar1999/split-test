var user = Math.floor((Math.random() * 1000000) + 1); // generates different users for key

window.SPLIT_RUM.init('a3bnr8kp4b9n2clrnprh26nidgltsgolsim6') //init javascript rum agent
    .identities([
        { key: user, trafficType: 'User' }
    ]);
var factory = splitio({ //init split sdk
    core: {
        authorizationKey: 'a3bnr8kp4b9n2clrnprh26nidgltsgolsim6',
        key: user // unique identifier for your user
    }
});

var client = factory.client();

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
client.on(client.Event.SDK_READY, function() { //listens till sdk is recieved
    var treatment = client.getTreatment('Intern_test_split'); //determines treatment based on user key
    if (treatment === 'on') {
        document.getElementById("treatment_here").innerHTML = "Hello World Savni";
    }   else   if (treatment === 'off') {
       // alert("Hello World Intern");
        document.getElementById("treatment_here").innerHTML = "Hello World Intern";
    }   else {
        alert("Hello World");
    }
    var properties = {package : "premium", admin : true, discount : 50}; //sends properties to split event call
    var queued = client.track('User','test_event', 83.334, properties);
});
