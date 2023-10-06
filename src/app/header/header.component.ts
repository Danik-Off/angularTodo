import { Component, Input,Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
       <h1>{{title}}</h1>
       <div class="inputLine">
       <input type="checkbox" [checked]="allSelected" (click)="onSelectedAll()"/>
       <input #textInput
       (keydown.enter)="onAddNew()"
       (blur)="onAddNew()" />
       </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 @Input() title!:string;
 @Input() allSelected!:boolean;

 @ViewChild('textInput')
  textInput!: ElementRef;

 @Output() onEndWrite = new EventEmitter<string>();
 @Output() chooseAll = new EventEmitter<boolean>();

  onSelectedAll()
  {
    this.chooseAll.emit(!this.allSelected)
  }

 onAddNew() {
  console.log(this.textInput.nativeElement.value);
  if(this.textInput.nativeElement.value){
    this.onEndWrite.emit(this.textInput.nativeElement.value);
    this.textInput.nativeElement.value = "";
  }

 }
}
