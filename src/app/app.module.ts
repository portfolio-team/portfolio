import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { DataService } from './data.service';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HeaderComponent } from './components/header/header.component';
import { TopviewComponent } from './components/topview/topview.component';
import { WorksComponent } from './components/works/works.component';
import { InstaComponent } from './components/insta/insta.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopviewComponent,
    WorksComponent,
    InstaComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
