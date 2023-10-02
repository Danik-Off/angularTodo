import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <input type="radio" id="radio1" name="radioGroup" />
      <label class="custom-radio" for="radio1">All</label>

      <input type="radio" id="radio2" name="radioGroup" />
      <label class="custom-radio" for="radio2">Active</label>

      <input type="radio" id="radio3" name="radioGroup" />
      <label class="custom-radio" for="radio3">Completed</label>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
