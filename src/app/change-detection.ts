import {Component} from 'angular2/core';
import {OnPush, CheckOnce, Detached, Default,
        CheckAlways, NoStrategyChosen} from './components/detection-strategies/demos';
import {Clock} from './components/clock/clock';

@Component({
  selector: 'change-detection-app',
  templateUrl: './app/change-detection.template.html',
  directives: [Clock, OnPush, CheckOnce, Detached,
               Default, CheckAlways, NoStrategyChosen]
})
export class ChangeDetectionApp {
  current: Date;

  updateTime(current: Date) {
    this.current = current;
  }
}
