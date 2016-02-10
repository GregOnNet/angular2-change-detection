import {Component} from 'angular2/core';
import {OnPush, CheckOnce, Detached, Default,
        CheckAlways, NoStrategyChosen} from './components/detection-strategies/demos';

@Component({
  selector: 'change-detection-app',
  template: `
    <on-push></on-push>
    <check-once></check-once>
    <detached></detached>
    <default></default>
    <check-always></check-always>
    <no-strategy-chosen></no-strategy-chosen>
  `,
  directives: [OnPush, CheckOnce, Detached, Default, CheckAlways, NoStrategyChosen]
})
export class ChangeDetectionApp { }
