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
    var Clock;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (base_strategy_functions_1_1) {
                base_strategy_functions_1 = base_strategy_functions_1_1;
            }],
        execute: function() {
            Clock = (function (_super) {
                __extends(Clock, _super);
                function Clock(ref) {
                    this.ref = ref;
                    this.time = new Date();
                    this.timeUpdated = new core_1.EventEmitter();
                    _super.call(this);
                }
                Clock.prototype.ngOnInit = function () {
                    setInterval(this.updateClock.bind(this), 1000);
                };
                Clock.prototype.updateClock = function () {
                    this.time = new Date();
                    this.timeUpdated.next(this.time);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Clock.prototype, "timeUpdated", void 0);
                Clock = __decorate([
                    core_1.Component({
                        selector: 'clock',
                        templateUrl: 'app/components/clock/clock.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
                ], Clock);
                return Clock;
            })(base_strategy_functions_1.AbstractChangeStrategy);
            exports_1("Clock", Clock);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/clock/clock.js.map