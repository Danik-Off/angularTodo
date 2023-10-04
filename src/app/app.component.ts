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

  filter: 'all' | 'active' | 'done' = 'all';

  allItems: Task[] = [];

  get items():Task[]{
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  ngOnInit(){
    this.load();
  }

  setFilter(newFilter:'all' | 'active' | 'done'):void
  {
    this.filter = newFilter
  }

  addItem(text:string){
    this.items.unshift(
      {done:false,text},
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
      "todoItems",JSON.stringify(this.allItems)
    );
  }
  load(){
    const localStorageData = localStorage.getItem( "todoItems");
    if (localStorageData) {
      try {
        this.allItems = JSON.parse(localStorageData) as Task[];
      } catch (error) {
        console.error("Ошибка:", error);
      }
    }

  }
}

