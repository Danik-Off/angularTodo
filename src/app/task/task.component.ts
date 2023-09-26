import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  template: `
    <li>
      <input type="checkbox" />
      <label>tgadf</label>
      <button>X</button>
    </li>
  `,
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {}
