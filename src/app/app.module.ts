import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent //các component trong module này (mỗi component sinh ra phải ở trong 1 module)
  ],
  imports: [
    BrowserModule //nơi chèn các module khác vào
  ],
  providers: [], //nơi chèn các service vào
  bootstrap: [AppComponent] //Các component 
})
export class AppModule { } //Module gốc ứng dụng 
