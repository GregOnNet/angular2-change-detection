import {Component} from 'angular2/core';
import {OnPush, CheckOnce, Detached, Default,
        CheckAlways, NoStrategyChosen} from './components/detection-strategies/demos';
import {Clock} from './components/clock/clock';

@Component({
  selector: 'change-detection-app',
  template: `
    <div class="ui four column grid">
      <div class="row">
        <div class="sixteen wide column">
          <clock></clock>
        </div>
      </div>
      <div class="row">
        <div class="column"><on-push></on-push></div>
        <div class="column"><check-once></check-once></div>
        <div class="column"><detached></detached></div>
        <div class="column"><default></default></div>
      </div>
      <div class="row">
        <div class="column"><check-always></check-always></div>
        <div class="column"><no-strategy-chosen></no-strategy-chosen></div>
      </div>
    </div>
  `,
  directives: [Clock, OnPush, CheckOnce, Detached,
               Default, CheckAlways, NoStrategyChosen]
})
export class ChangeDetectionApp { }
