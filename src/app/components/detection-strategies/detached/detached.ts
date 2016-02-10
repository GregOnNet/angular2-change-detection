import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';
import {DetachedChild} from '../detached-child/detached-child'

@Component({
  selector: 'detached',
  // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
  // Detached means that the change detector sub tree is not a part of the main tree and should be skipped.
  // https://angular.io/docs/js/latest/api/core/ChangeDetectorRef-class.html
  changeDetection: ChangeDetectionStrategy.Detached,
  template: `
    <h1>Detached</h1>
    Number of ticks: {{ numberOfTicks }}
    <detached-child></detached-child>
  `,
  directives: [DetachedChild]
})
export class Detached {
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
