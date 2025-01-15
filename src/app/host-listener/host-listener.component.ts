import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  imports: [],
  template: '<p>Resize the window to trigger HostListener</p>',
  styleUrl: './host-listener.component.css'
})
export class HostListenerComponent {

  @HostListener('window:resize')
  onResize() {
    console.log('HostListener triggered on window resize');
  }

  ngDoCheck() {
    console.log("HostListenerComponent called")
  }

}
