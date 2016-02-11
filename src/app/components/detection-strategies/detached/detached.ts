import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';
import {DetachedChild} from '../detached-child/detached-child'
import {IDemo} from '../../../contracts/demo.d';

@Component({
  selector: 'detached',
  // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
  // Detached means that the change detector sub tree is not a part of the main tree and should be skipped.
  // https://angular.io/docs/js/latest/api/core/ChangeDetectorRef-class.html
  changeDetection: ChangeDetectionStrategy.Detached,
  templateUrl: './app/components/detection-strategies/detached/detached.template.html',
  directives: [DetachedChild]
})
export class Detached implements IDemo {
  title: string = ChangeDetectionStrategy[ChangeDetectionStrategy.Detached];
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
