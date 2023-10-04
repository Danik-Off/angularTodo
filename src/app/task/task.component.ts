import { Component,ElementRef,EventEmitter,Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
     <li>
      <input type="checkbox" [checked]="checked"/>
      <label #label (dblclick)="onEdit()"
       [hidden]="isEdited">
       {{labelText}}</label>
      <input  (keydown.enter)="onEditEnd()"
      (blur)="onEditEnd()"
      [hidden]="!isEdited" type="text" #inputText autofocus/>
      <button (click)="onDelete()">&times;</button>
    </li>
  `,
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
isEdited:boolean = false;

@Input("text") labelText:string ='';
@Input() checked!:boolean;
@Output() edit = new EventEmitter<string>();
@Output() delete = new EventEmitter();
@ViewChild('label')label!: ElementRef;
@ViewChild('inputText')inputText!: ElementRef;

onDelete(): void{

  this.delete.emit();
}
onEdit(): void{
  this.isEdited = true;
  this.inputText.nativeElement.value =  this.label.nativeElement.innerText;
  this.inputText.nativeElement.focus();
}
onEditEnd(): void{
  this.label.nativeElement.innerText =  this.inputText.nativeElement.value ;
  this.edit.emit(this.inputText.nativeElement.value);
  this.isEdited = false;
}
}
