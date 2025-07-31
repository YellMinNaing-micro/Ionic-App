import { Routes } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { TodoComponent } from "./pages/todo/todo.component";

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  // },

  // { path: '', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'todo', component: TodoComponent },
  {
    path: '',
    loadComponent: () => import('./login-page/login-page.page').then( m => m.LoginPagePage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register-page/register-page.page').then( m => m.RegisterPagePage)
  },
  {
    path: 'todo',
    loadComponent: () => import('./todo-page/todo-page.page').then( m => m.TodoPagePage)
  },
];
