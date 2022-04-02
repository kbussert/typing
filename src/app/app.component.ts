import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = "";

  onChange(target: EventTarget) {
    this.enteredText  = (<HTMLInputElement>target).value;
  }

  compare(letter: string, enteredLetter: string) {
    if(!enteredLetter){
      return 'pending'
    }

    return enteredLetter === letter ? 'correct' : 'incorrect'
  }
}
