import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {
  FormsModule,
  ReactiveFormsModule
 } from '@angular/forms';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { VisuaUtentiComponent } from './visua-utenti/visua-utenti.component';
import { BachecaComponent } from './bacheca/bacheca.component';
import { LoginComponent } from './login/login.component';
import { NewObjectComponent } from './new-object/new-object.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ObjectListComponent } from './object-list/object-list.component';
import { UserObjectComponent } from './user-object/user-object.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    VisuaUtentiComponent,
    BachecaComponent,
    LoginComponent,
    NewObjectComponent,
    NewPostComponent,
    ObjectListComponent,
    UserObjectComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
