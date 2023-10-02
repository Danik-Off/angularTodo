import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title:string = 'ToDo';
  items: Task[] = [
    new Task(true,"helloWorld"),
    new Task(false,"helloWorld1"),
    new Task(false,"helloWorld2"),
    new Task(false,"helloWorld3"),
  ];
}
class Task{
 status:boolean;
 text:string;
 constructor(status:boolean,text:string) {
  this.status = status;
  this.text = text;
 }
}
