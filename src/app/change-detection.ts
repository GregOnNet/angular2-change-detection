import {Component} from 'angular2/core';
import {OnPush, CheckOnce, Detached, Default,
        CheckAlways, NoStrategyChosen} from './components/detection-strategies/demos';

@Component({
  selector: 'change-detection-app',
  template: `
    <div class="ui cards">
      <on-push></on-push>
      <check-once></check-once>
      <detached></detached>
      <default></default>
      <check-always></check-always>
      <no-strategy-chosen></no-strategy-chosen>
    </div>
  `,
  directives: [OnPush, CheckOnce, Detached, Default, CheckAlways, NoStrategyChosen]
})
export class ChangeDetectionApp { }
