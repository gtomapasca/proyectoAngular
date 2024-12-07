import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDashboardComponent } from './pages/task-dashboard/task-dashboard.component';
import { TaskKanbanBoardComponent } from './pages/task-kanban-board/task-kanban-board.component';
import { TaskUsuarioComponent } from './pages/task-usuario/task-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: TaskDashboardComponent },
  { path: 'kanban', component: TaskKanbanBoardComponent },
  { path: "user", component: TaskUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
