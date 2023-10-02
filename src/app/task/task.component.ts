import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
     <li>
      <input type="checkbox" [checked]="checked"/>
      <label>{{labelText}}</label>
      <button>&times;</button>
    </li>
  `,
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
@Input("text") labelText:string ='';
@Input() checked!:boolean;
}
