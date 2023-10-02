import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
       <h1>{{title}}</h1>
       <div class="inputLine">
       <input type="checkbox"/>
       <input/>
       </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 @Input() title!:string;
}
