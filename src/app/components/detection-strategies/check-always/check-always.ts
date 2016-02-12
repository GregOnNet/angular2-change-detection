import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';
import {IDemo} from '../../../contracts/demo.d';

@Component({
  selector: 'check-always',
  // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
  // CheckAlways means that after calling detectChanges the mode of the change detector will remain CheckAlways.
  changeDetection: ChangeDetectionStrategy.CheckAlways,
  templateUrl: './app/components/detection-strategies/base.template.html'
})
export class CheckAlways implements IDemo {
  title: string = ChangeDetectionStrategy[ChangeDetectionStrategy.CheckAlways];
  @Input() time:Date;

  constructor(private ref: ChangeDetectorRef) {
    // ??? Using detectChanges throws error: Error during instantiation of CheckAlways!
    // this.ref.detectChanges();
  }
}
