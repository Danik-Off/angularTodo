import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title:string = 'ToDo';
  items: Task[] = [
    {status:true,text:"helloWorld"},
    {status:true,text:"helloWorld"},
    {status:true,text:"helloWorld"},
    {status:true,text:"helloWorld"},
  ];
  ngOnInit(){
    this.load();
  }
  addItem(text:string){
    this.items.unshift(
      {status:false,text},
    )
    this.save();
  }
  editTextItem(id:number,text:string){
    this.save();
  }
  editStatusItem(id:number){
    this.save();
  }
  deleteItem(id: number) {
    if (id >= 0 && id < this.items.length) {
      this.items.splice(id, 1);
      this.save();
    }
  }
  save(){
    localStorage.setItem(
      "todoItems",JSON.stringify(this.items)
    );
  }
  load(){
    const localStorageData = localStorage.getItem( "todoItems");
    if (localStorageData) {
      try {
        this.items = JSON.parse(localStorageData) as Task[];
      } catch (error) {
        console.error("Ошибка:", error);
      }
    }

  }
}

