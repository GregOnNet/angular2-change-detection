import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';
import {IDemo} from '../../../contracts/demo.d';

@Component({
  selector: 'detached-child',
  // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
  // Detached means that the change detector sub tree is not a part of the main tree and should be skipped.
  // changeDetection: ChangeDetectionStrategy.Detached,
templateUrl: './app/components/detection-strategies/base.template.html'
})
export class DetachedChild implements IDemo {
  title: string = `Child of ${ChangeDetectionStrategy[ChangeDetectionStrategy.Detached]}`;
  numberOfTicks = 0;

  constructor(ref: ChangeDetectorRef) { }

  ngOnInit() {
    // This change should not be recognized
    this.numberOfTicks++;
    setInterval(() => {
        this.numberOfTicks++;
    }, 1000);
  }
}
