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
    HomepageComponent
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
