import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FromNowPipe } from './Pipes/from-now.pipe';
import { HelloComponent } from './Component/hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    FromNowPipe,
    HelloComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
