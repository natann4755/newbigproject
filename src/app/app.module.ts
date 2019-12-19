import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MModule } from './materyall/nati';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './comps/todo/todo.component';

import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './comps/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { NavigeComponent } from './comps/navige/navige.component';
import { PostsComponent } from './comps/posts/posts.component';
import { PostComponent } from './card/post/post.component';
import { Pipe1Pipe } from './pips/pipe1.pipe';
import { AddpostComponent } from './additem/addpost/addpost.component';
import { PitodoPipe } from './pips/pitodo.pipe';
import { HomepageComponent } from './comps/homepage/homepage.component';
import { HowMnyUsersComponent } from './comps/how-mny-users/how-mny-users.component';
import { TodossComponent } from './card/todoss/todoss.component';
import { PipeIncludsPipe } from './pip/pipe-includs.pipe';
import { PipeshavePipe } from './pip/pipeshave.pipe';
import { AddtodoComponent } from './additem/addtodo/addtodo.component';
import { UserComponent } from './card/user/user.component';
import { UsersComponent } from './comps/users/users.component';
import { AdduserComponent } from './additem/adduser/adduser.component';
import { PhotosComponent } from './comps/photos/photos.component';
import { PhotoComponent } from './card/photo/photo.component';
import { AddphotoComponent } from './additem/addphoto/addphoto.component';
import { AlbomsComponent } from './comps/alboms/alboms.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
   
    LoginComponent,
    NavigeComponent,
    PostsComponent,
    PostComponent,
    Pipe1Pipe,
    AddpostComponent,
    PitodoPipe,
    HomepageComponent,
    HowMnyUsersComponent,
    TodossComponent,
    PipeIncludsPipe,
    PipeshavePipe,
    AddtodoComponent,
    UserComponent,
    UsersComponent,
    AdduserComponent,
    PhotosComponent,
    PhotoComponent,
    AddphotoComponent,
    AlbomsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
