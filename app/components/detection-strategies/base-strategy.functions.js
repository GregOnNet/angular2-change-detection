System.register(['angular2/core'], function(exports_1) {
    var core_1;
    var AbstractChangeStrategy;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AbstractChangeStrategy = (function () {
                function AbstractChangeStrategy() {
                }
                AbstractChangeStrategy.prototype.chooseStrategy = function (strategy) {
                    if (!this.ref)
                        throw Error("ChangeDetectorRef undefined: You have to use AbstractChangeStrategy within a Component");
                    switch (strategy) {
                        case core_1.ChangeDetectionStrategy[core_1.ChangeDetectionStrategy.CheckOnce]:
                            this.ref.markForCheck();
                            break;
                        case core_1.ChangeDetectionStrategy[core_1.ChangeDetectionStrategy.Detached]:
                            this.ref.detach();
                            break;
                        case core_1.ChangeDetectionStrategy[core_1.ChangeDetectionStrategy.CheckAlways]:
                            this.ref.reattach();
                            break;
                        default: throw new Error("Unknown strategy: " + strategy);
                    }
                };
                return AbstractChangeStrategy;
            })();
            exports_1("AbstractChangeStrategy", AbstractChangeStrategy);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/detection-strategies/base-strategy.functions.js.map