System.register(['angular2/core', '../detection-strategies/base-strategy.functions'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, base_strategy_functions_1;
    var ChildClock;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (base_strategy_functions_1_1) {
                base_strategy_functions_1 = base_strategy_functions_1_1;
            }],
        execute: function() {
            ChildClock = (function (_super) {
                __extends(ChildClock, _super);
                function ChildClock(ref) {
                    var _this = this;
                    _super.call(this);
                    this.title = core_1.ChangeDetectionStrategy[core_1.ChangeDetectionStrategy.CheckAlways];
                    this.numberOfTicks = 0;
                    this.ref = ref;
                    setInterval(function () { return _this.numberOfTicks++; }, 1000);
                    // ??? Using detectChanges throws error: Error during instantiation of CheckAlways!
                    // this.ref.detectChanges();
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Date)
                ], ChildClock.prototype, "time", void 0);
                ChildClock = __decorate([
                    core_1.Component({
                        selector: 'child-clock',
                        // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
                        // CheckAlways means that after calling detectChanges the mode of the change detector will remain CheckAlways.
                        templateUrl: './app/components/child-clock/child-clock.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
                ], ChildClock);
                return ChildClock;
            })(base_strategy_functions_1.AbstractChangeStrategy);
            exports_1("ChildClock", ChildClock);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/child-clock/child-clock.js.map