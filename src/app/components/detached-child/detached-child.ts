import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';


@Component({
  selector: 'detached-child',
  // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
  // Detached means that the change detector sub tree is not a part of the main tree and should be skipped.
  // changeDetection: ChangeDetectionStrategy.Detached,
  template: `
    <h3>Child</h3>
    Number of ticks: {{ numberOfTicks }}
    <hr>
  `
})
export class DetachedChild {
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
