System.register(['angular2/core', './components/clock/clock', './components/child-clock/child-clock'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, clock_1, child_clock_1;
    var ChangeDetectionApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (clock_1_1) {
                clock_1 = clock_1_1;
            },
            function (child_clock_1_1) {
                child_clock_1 = child_clock_1_1;
            }],
        execute: function() {
            ChangeDetectionApp = (function () {
                function ChangeDetectionApp() {
                }
                ChangeDetectionApp.prototype.updateTime = function (current) {
                    this.current = current;
                };
                ChangeDetectionApp = __decorate([
                    core_1.Component({
                        selector: 'change-detection-app',
                        templateUrl: './app/change-detection.template.html',
                        directives: [clock_1.Clock, child_clock_1.ChildClock]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChangeDetectionApp);
                return ChangeDetectionApp;
            })();
            exports_1("ChangeDetectionApp", ChangeDetectionApp);
        }
    }
});
//# sourceMappingURL=../../../app/change-detection.js.map