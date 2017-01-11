import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoStoreService } from './service/TodoStore/todo-store.service';
import { AppComponent } from './components/appComponent/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TodoStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
