import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  #router = inject(Router)

  readonly paths = this.#router.config.
    map(({ path, title }) => ({ path: '/' + path, title })).slice(0,  this.#router.config.length - 1)

 }
