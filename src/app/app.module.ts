import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { LogoapComponent } from './components/header/logoap/logoap.component';
import { SocialComponent } from './components/header/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    LogoapComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
