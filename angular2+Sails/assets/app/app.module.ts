import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {TaskService} from './task.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule
    ],
    bootstrap:[AppComponent],
    providers:[
      TaskService
    ]
})
export class AppModule {}
