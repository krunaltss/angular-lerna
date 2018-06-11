import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleOneLibraryModule } from 'projects/module-one-library/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuleOneLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
