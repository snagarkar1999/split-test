// <script src="//cdn.split.io/sdk/split-10.8.0.min.js"></script>
//     <script>
//     class SplitIO {
//         constructor() {
//             this.isSDKReady=false;
//             this.factory = splitio({
//                 core: {
//                     authorizationKey: 'API Key',
//                     key: 'userKey',
//                     trafficType: 'account'
//                 },
//                 startup: {
//                     readyTimeout: 4, requestTimeoutBeforeReady: 4
//                 },
//                 scheduler: {
//                     impressionsRefreshRate: 20
//                 },
//                 storage: {
//                     type: 'LOCALSTORAGE'
//                 },
//             });
//             this.client = this.factory.client();
//             this.client.on(this.client.Event.SDK_READY, () => {
//                 this.isSDKReady=true;
//             });
//         }
//         applyFeatureFlag(featureName) {
//             return this.client.getTreatment(featureName);
//         }
//         applyFeatureFlagWithConfig(featureName) {
//             return this.client.getTreatmentWithConfig(featureName);
//         }
//         sendEvent(eventName, eventValue, properties) {
//             return this.client.track(eventName, eventValue, properties);
//         }
//         destroySplit() {
//             this.client.destroy();
//             this.client=null;
//         }
//     }
//
// function calculateTreatments() {
//     treatment = mySplit.applyFeatureFlag("sample_feature");
//     console.log("treatment: "+treatment)
//     treatmentResult = mySplit.applyFeatureFlagWithConfig('sample_feature');
//     console.log("treatment is "+treatmentResult.treatment);
//     var configs = JSON.parse(treatmentResult.config);
//     Object.keys(configs).forEach(function(key) {
//         console.log("Key: "+key+", value: "+configs[key]);
//     });
//     var properties = {shipping : "standard", payment : "master", price : 50};
//     if (!mySplit.sendEvent("conversion", 1, properties)) {
//         console.log("Sending event failed");
//     }
// }
//
// var mySplit = new SplitIO();
// if (!mySplit.isSDKReady) {
//     console.log("Split not ready yet");
//     mySplit.client.on(mySplit.client.Event.SDK_READY, () => {
//         calculateTreatments();
//     });
// } else {
//     calculateTreatments();
// }
//
// </script>