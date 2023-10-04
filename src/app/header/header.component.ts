import { Component, Input,Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
       <h1>{{title}}</h1>
       <div class="inputLine">
       <input type="checkbox"/>
       <input #textInput
       (keydown.enter)="onClick()"
       (blur)="onClick()" />
       </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 @Input() title!:string;
 @ViewChild('textInput')
  textInput!: ElementRef;
 @Output() onEndWrite = new EventEmitter<string>();

 onClick() {
  console.log(this.textInput.nativeElement.value);
  if(this.textInput.nativeElement.value){
    this.onEndWrite.emit(this.textInput.nativeElement.value);
    this.textInput.nativeElement.value = "";
  }

 }
}
