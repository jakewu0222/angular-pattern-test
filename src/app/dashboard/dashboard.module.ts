import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { SalesModule } from './sales/sales.module';
import { TodoModule } from './todo/todo.module';

@NgModule({
  imports: [CommonModule, SalesModule, TodoModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
