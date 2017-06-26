import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() name: string;
  title = 'app';
}
