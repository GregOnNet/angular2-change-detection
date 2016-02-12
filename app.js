System.register(['angular2/platform/browser', './app/change-detection'], function(exports_1) {
    var browser_1, change_detection_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (change_detection_1_1) {
                change_detection_1 = change_detection_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(change_detection_1.ChangeDetectionApp);
        }
    }
});
//# sourceMappingURL=../../app.js.map