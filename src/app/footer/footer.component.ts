import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <input type="radio" id="radio1" name="radioGroup"  (change)="onChange('all')" checked/>
      <label class="custom-radio" for="radio1">All</label>

      <input type="radio" id="radio2" name="radioGroup"  (change)="onChange('active')"/>
      <label class="custom-radio" for="radio2">Active</label>

      <input type="radio" id="radio3" name="radioGroup"  (change)="onChange('done')"/>
      <label class="custom-radio" for="radio3">Completed</label>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Output() changeFilter = new EventEmitter<"all" | "active" | "done">();

  onChange(filter:string)
  {
    this.changeFilter.emit(filter as "all" | "active" | "done")
  }
}
