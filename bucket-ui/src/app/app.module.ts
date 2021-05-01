import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputBucketComponent } from './component/input-bucket/input-bucket.component';
import { ListBucketComponent } from './component/list-bucket/list-bucket.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBucketComponent,
    ListBucketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
