import {ChangeDetectorRef, ChangeDetectionStrategy} from 'angular2/core';

export class AbstractChangeStrategy {
  ref: ChangeDetectorRef;

  chooseStrategy(strategy: string): void {
    if (!this.ref)
      throw Error(`ChangeDetectorRef undefined: You have to use AbstractChangeStrategy within a Component`);

    switch(strategy) {
      case ChangeDetectionStrategy[ChangeDetectionStrategy.CheckOnce]:
        this.ref.markForCheck(); break;
      case ChangeDetectionStrategy[ChangeDetectionStrategy.Detached]:
        this.ref.detach(); break;
      case ChangeDetectionStrategy[ChangeDetectionStrategy.CheckAlways]:
        this.ref.reattach(); break;
      default: throw new Error(`Unknown strategy: ${strategy}`);
    }
  }
}
