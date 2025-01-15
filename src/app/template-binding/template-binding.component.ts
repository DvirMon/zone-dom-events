import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  imports: [],
  template: `
  <button (click)="0">Click Me</button>
  <p>Check the console for CD logs</p>
`,
  styleUrl: './template-binding.component.css'
})
export class TemplateBindingComponent {

  ngDoCheck() {
    console.log("TemplateBindingComponent called")
  }
}
