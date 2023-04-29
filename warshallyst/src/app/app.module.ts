import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrototypeCreateComponent } from './components/prototype-create/prototype-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PrototypeCreateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
