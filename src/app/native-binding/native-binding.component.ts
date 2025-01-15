import { Component, effect, ElementRef, inject, NgZone, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-native-binding',
  imports: [],
  template: `
  <button #buttonZone>Click with zone</button>
  <button #buttonZoneless>Click outside zone</button>
  <p>Console will log if CD is triggered or not</p>
  `,
  styleUrl: './native-binding.component.css'
})
export class NativeBindingComponent {

  buttonZoneRef = viewChild<ElementRef<HTMLButtonElement>>('buttonZone')

  buttonZonelessRef = viewChild<ElementRef<HTMLButtonElement>>('buttonZoneless')

  ngZone = inject(NgZone);

  buttonEffect = effect(() => {

    const buttonZoneElem = this.buttonZoneRef();
    if (buttonZoneElem) {

      buttonZoneElem.nativeElement.addEventListener('click', () => {
        console.log('Native event binding triggered (CD enabled)');
      });


    }

    const buttonZonelessElm = this.buttonZonelessRef();

    if (buttonZonelessElm) {
      this.ngZone.runOutsideAngular(() => {
        buttonZonelessElm.nativeElement.addEventListener('click', () => {
          console.log('Native event binding triggered (CD disabled)');
        });
      });
    }
  })

  ngDoCheck() {
    console.log("NativeBindingComponent called")
  }
}
