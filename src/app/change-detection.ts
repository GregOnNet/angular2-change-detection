import {Component} from 'angular2/core';


@Component({
  selector: 'change-detection-app',
  providers: [],
  templateUrl: 'app/change-detection.html',
  directives: [],
  pipes: []
})
export class ChangeDetectionApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
