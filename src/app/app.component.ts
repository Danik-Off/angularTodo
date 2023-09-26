import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'ToDo';
  items: string[] = ['Пункт 1', 'Пункт 2', 'Пункт 3'];
}
