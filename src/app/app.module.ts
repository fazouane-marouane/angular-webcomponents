import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { promoteToWebComponent } from './webcomponents'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor() {
  }

  ngDoBootstrap(appRef: any) {
    promoteToWebComponent(appRef, AppComponent)
  }
}
