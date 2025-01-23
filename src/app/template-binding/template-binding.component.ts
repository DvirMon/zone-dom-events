import { ChangeDetectionStrategy, Component, effect, ElementRef, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-template-binding',
  imports: [ReactiveFormsModule],
  template: `
  
  <label for="">Binding event Input</label>
  <input type="text" (input)="onValueChange()">
  
  <label for="">Native event Input</label>
  <input #input type="text" >

  <label for="">Reactive Input</label>
  <input [formControl]="inputControl" type="text" >
  
  <button (click)="0">Click Me</button>
  <p>Check the console for CD logs</p>
`,
  styleUrl: './template-binding.component.css',
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class TemplateBindingComponent {

  inputControl = new FormControl();


  inputRef = viewChild<ElementRef<HTMLButtonElement>>('input');

  constructor() {
    // still trigger CD cycles - why?? since i have property binding?
    this.inputControl.valueChanges.pipe(debounceTime(3000)).subscribe(() => {
      console.log('reactive called')

    })

    effect(() => {
      // disable CD cycles
      const inputRef = this.inputRef();
      if (inputRef) {
        console.log("called")

        const event$ = fromEvent(inputRef.nativeElement, 'input');

        const value$ = event$.pipe(
          debounceTime(300),
          map(() => inputRef.nativeElement.value));

        // const value = toSignal(value$);


        // inputRef.nativeElement.addEventListener('input', () => {
        //   console.log('Native event binding triggered (CD enabled)');
        // });
      }
    })
  }


  ngDoCheck() {
    // console.log("TemplateBindingComponent called")
  }

  onValueChange() {
    console.log('event binding called')
  }
}
