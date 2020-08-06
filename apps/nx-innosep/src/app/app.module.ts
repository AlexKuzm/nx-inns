import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShellModule } from 'libs/shell/src/lib/shell.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
