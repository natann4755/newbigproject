import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './comps/todo/todo.component';
import { LoginComponent } from './comps/login/login.component';
import { NavigeComponent } from './comps/navige/navige.component';
import { PostsComponent } from './comps/posts/posts.component';
import { AddpostComponent } from './additem/addpost/addpost.component';
import { HomepageComponent } from './comps/homepage/homepage.component';
import { AddtodoComponent } from './additem/addtodo/addtodo.component';
import { UsersComponent } from './comps/users/users.component';
import { AdduserComponent } from './additem/adduser/adduser.component';
import { PhotosComponent } from './comps/photos/photos.component';
import { AddphotoComponent } from './additem/addphoto/addphoto.component';
import { AlbomsComponent } from './comps/alboms/alboms.component';



const routes: Routes = [
  {path: "todo", component:TodoComponent},
  {path: "login", component:LoginComponent},
  {path: "navi", component:NavigeComponent},
  {path: "post", component:PostsComponent},
  {path: "addpost", component:AddpostComponent},
  {path: "addtodo", component:AddtodoComponent},
  {path: "homepage", component:HomepageComponent},
  {path: "users", component:UsersComponent},
  {path: "addusers", component:AdduserComponent},
  {path: "photos", component:PhotosComponent},
  {path: "addphotos", component:AddphotoComponent},
  {path: "alboms", component:AlbomsComponent},
  
  
  

   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
