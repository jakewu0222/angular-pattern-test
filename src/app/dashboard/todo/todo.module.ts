import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { TodoService } from '../../middleware/dashboard/todo/todo.service';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [CommonModule, TodoRoutingModule],
  declarations: [TodoComponent, TodoListComponent, TodoAddComponent]
})
export class TodoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoModule,
      providers: [TodoService]
    };
  }
}
