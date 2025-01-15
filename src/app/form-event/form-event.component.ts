import { Component, effect, signal } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-event',
  imports: [],
  template: `
  <div id="target">Click me (RxJS fromEvent)</div>
  <p>Console will log CD activity</p>
  <!-- <button>Subscribe with Async</button> -->
  @if(subWithAsync()) {}
  `,
  styleUrl: './form-event.component.css'
})
export class FormEventComponent {

  subWithAsync = signal(false);

  kill = new Subject<void>();

  constructor() {
    const event = fromEvent(window, 'scroll');

    event.pipe(takeUntil(this.kill))
      .subscribe(() => console.log("scrolling"));

    effect(() => {
      if (this.subWithAsync()) {
        this.kill.next();
      }
    })
  }



  ngDoCheck() {
    console.log("FormEventComponent called")
  }
}
