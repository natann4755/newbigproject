import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './comps/todo/todo.component';
import { LoginComponent } from './comps/login/login.component';
import { NavigeComponent } from './comps/navige/navige.component';
import { PostsComponent } from './comps/posts/posts.component';
import { AddpostComponent } from './additem/addpost/addpost.component';
import { HomepageComponent } from './comps/homepage/homepage.component';


const routes: Routes = [
  {path: "todo", component:TodoComponent},
  {path: "login", component:LoginComponent},
  {path: "navi", component:NavigeComponent},
  {path: "post", component:PostsComponent},
  {path: "addpost", component:AddpostComponent},
  {path: "homepage", component:HomepageComponent},

   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
