import {Component} from 'angular2/core';
import {Clock} from './components/clock/clock';
import {ChildClock} from './components/child-clock/child-clock';

@Component({
  selector: 'change-detection-app',
  templateUrl: './app/change-detection.template.html',
  directives: [Clock, ChildClock]
})
export class ChangeDetectionApp {
  current: Date;

  updateTime(current: Date) {
    this.current = current;
  }
}
