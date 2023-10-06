import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <li>
      <input type="checkbox" [(ngModel)]="checked" (click)="onDone()"/>
      <label #label (dblclick)="onEdit()" [hidden]="isEdited">
        {{ editedText}}
      </label>
      <input
        (keydown.enter)="onEditEnd()"
        (blur)="onEditEnd()"
        [hidden]="!isEdited"
        type="text"
        #inputText
        [(ngModel)]="editedText"

      />
      <button (click)="onDelete()">&times;</button>
    </li>
  `,
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  editedText: string = ''; // Отдельное поле для редактирования текста

  @Input('text') labelText: string = '';
  @Input() checked!: boolean;

  @Output() edit = new EventEmitter<string>();
  @Output() done = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter();

  @ViewChild('inputText') inputText!: ElementRef;

  isEdited: boolean = false;


  ngOnInit(){
    this.editedText = this.labelText;
  }
  onDelete(): void {
    this.delete.emit();
  }
  onDone(): void {
    this.done.emit(!this.checked);
  }
  onEdit(): void {
    this.isEdited = true;
    setTimeout(()=>{
      this.inputText.nativeElement.focus();
    },0);
  }
  onEditEnd(): void {

    this.edit.emit(this.editedText);
    this.isEdited = false;
  }
}
