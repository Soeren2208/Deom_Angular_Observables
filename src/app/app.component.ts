import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShowTodosComponent} from './component/show-todos/show-todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowTodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoAPIZugriffObservables';
}
