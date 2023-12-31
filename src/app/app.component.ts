import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'ToDo Angular';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems: Task[] = [];

  allSelected: boolean = false;

  get items(): Task[] {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  ngOnInit() {
    this.load();
  }
  ngDoCheck() {
    if (this.allItems.length > 0) {
      const doneCount = this.allItems.reduce((acc, item) => {
        if (item.done) acc++;
        return acc;
      }, 0);

      this.allSelected = doneCount === this.allItems.length;
    }
  }
  chooseAll(choosenAll: boolean) {
    console.log("e")
    this.allItems.map((item) => (item.done = choosenAll));
    this.save();
  }

  setFilter(newFilter: 'all' | 'active' | 'done'): void {
    this.filter = newFilter;
  }

  addItem(text: string) {
    this.allItems.unshift({ done: false, text });
    this.save();
  }
  editTextItem(id: number, text: string) {
    this.allItems[id].text = text;
    this.save();
  }
  editStatusItem(id: number, done: boolean) {
    console.log(done);
    this.allItems[id].done = done;
    this.save();
  }
  deleteItem(id: number) {
    if (id >= 0 && id < this.items.length) {
      this.allItems.splice(id, 1);
      this.save();
    }
  }
  save() {
    localStorage.setItem('todoItems', JSON.stringify(this.allItems));
  }
  load() {
    const localStorageData = localStorage.getItem('todoItems');
    if (localStorageData) {
      try {
        this.allItems = JSON.parse(localStorageData) as Task[];
      } catch (error) {
        console.error('Ошибка:', error);
      }
    }
  }
}
