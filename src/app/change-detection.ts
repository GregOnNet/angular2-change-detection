import {Component} from 'angular2/core';
import {Default} from './components/default/default';
import {OnPush} from './components/on-push/on-push';
import {CheckOnce} from './components/check-once/check-once';
import {Detached} from './components/detached/detached';
import {CheckAlways} from './components/check-always/check-always';
import {NoStrategyChosen} from './components/no-strategy-chosen/no-strategy-chosen';

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
